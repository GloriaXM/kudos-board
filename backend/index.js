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
    const board = await prisma.board.findMany({
        where: {boardName: req.params.name}
    });
    res.json(board);
});

app.post('/board', async (req, res) => {
    const {imagesrc, boardname, boardtype} = req.body;
    const newBoard = await prisma.board.create({
        data: {
            imageSrc: imagesrc,
            boardName: boardname,
            boardType: boardtype
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
