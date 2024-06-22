const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors()); // Allow backend to make requests to frontend

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`
));

app.get('/board', async (req, res) => {
    const board = await prisma.board.findMany({
        where: {
            boardType: req.query.type,
            boardName: req.query.name
        },
        select: {
            imageSrc: true,
            boardName: true,
            boardType: true,
            id: true
        },
    });
    res.json(board);
});

//Don't really see the need for this one
app.get('/board/:id', async (req, res) => {
    const boardId = parseInt(req.params.id);
    const board = await prisma.board.findUnique({
        where: {id: boardId}
    });
    res.json(board);
});

//TODO: separate searching functionality into its own route and use full text search
app.get('/board/search/:name', async (req, res) => {
    const name = req.params.name;
    const board = await prisma.board.findMany({
        where: {boardName: {
            contains: name,
        }},
    });
    res.json(board);
});

app.get('/recent', async (req, res) => {
    const offset = new Date();
    offset.setTime(Date.now() - (5*60*1000))
    const board = await prisma.board.findMany({
        where: {createdAt: { gte: offset }},
    });
    res.json(board);
});


app.post('/board', async (req, res) => {
    const {imagesrc, boardname, boardtype, description} = req.body;
    const newBoard = await prisma.board.create({
        data: {
            imageSrc: imagesrc,
            boardName: boardname,
            boardType: boardtype,
            description: description
        }
    });
    res.json(newBoard);
});

app.delete('/board/:boardId', async (req, res) => {
    const boardId = parseInt(req.params.boardId);
    await prisma.board.delete({
        //TODO: add AND conditional to add verification step if user is deleting a board with cards in it
        where: {
          id: boardId
        },
    });

    //TODO: add error handling here
    res.status(204).send()
});

app.patch('/board/:boardId', async (req, res) => {
    const {imagesrc, boardname, boardtype} = req.body;
    const boardId = parseInt(req.params.boardId);
    const updateBoard = await prisma.board.update({
        where: {
          id: boardId,
        },
        data: {
          imageSrc: imagesrc,
          boardName: boardname,
          boardType: boardtype
        },
    })
    res.status(204).send();
});

app.get('/board/cards/:boardId', async (req, res) => {
    const boardId = parseInt(req.params.boardId);
    const cards = await prisma.card.findMany({
        where: {
            boardId: boardId
        },
        orderBy: {
            id: 'desc'
        }
    });
    res.json(cards);
});

app.delete('/card/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.card.delete({
        where: {
          id: id,
        },
    });

    //TODO: add error handling here
    res.status(204).send()
});

app.patch('/card/:id', async (req, res) => {
    const cardId = parseInt(req.params.id);
    const newUpvotes = parseInt(req.query.upvotes);

    const updateCard = await prisma.card.update({
        where: {
          id: cardId,
        },
        data: {
          upvotes: newUpvotes
        },
    })
    res.status(204).send();
});

app.post('/board/card', async (req, res) => {
    const {title, note, author, gifSrc, upvotes, boardId} = req.body;
    const newCard = await prisma.card.create({
        data: {
            title: title,
            note: note,
            author: author,
            gifSrc: gifSrc,
            upvotes: upvotes,
            boardId: boardId
        }
    });
    res.json(newCard);
});
