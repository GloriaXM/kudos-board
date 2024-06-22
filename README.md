## Unit Assignment: Kudos Board

Submitted by: Gloria

Deployed Application (optional): [Kudos Board Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

- [x] **Home Page**
  - [x] Displays header, banner, search, board grid, and footer.
  - [x] Displays preview of all boards on initial page load.
    - [x] Boards previews should show an image/gif and board title.
  - [x] Users can click on a category (recent, celebration, thank you, inspiration) to filter the boards.
    - [x] Recent displays most recently created boards.
    - [x] Other categories display boards of that type.
  - [x] Users can search for a board by name.
  - [x] Users can click on a board to navigate to a new page containing that board.
  - [x] Users can create a new board.
    - [x] Boards should have a title, category, and author (optional).
  - [x] User can delete boards.

- [x] **Board Page**
  - [x] Displays a list of all cards for a board.
    -  [x] Each card features a text message.
    -  [x] Each card features a gif found using the [GIPHY API](https://developers.giphy.com/docs/api/).
    -  [x] Users can optionally sign the card as the author.
-   [x] Cards can be upvoted.
-   [x] Cards can be deleted.


#### STRETCH FEATURES


- [ ] **User Accounts**
  - [ ] Users should be able to log in with a username and password.
  - [ ] Users should be able to sign up for a new account.
  - [ ]  Boards and cards should be associated with a user.
    - [ ]  Anonymous cards or cards by guest users should still be allowed.
  - [ ] Add a new filter option on the home page to display only the current user's boards.
  - [ ] Allow boards to be deleted only if they are owned by the user.
- [ ] **Deployment**
  - [ ] Website is deployed via Render.
- [ ] **Comments**
  - [ ] Users should be able to comment on cards.


### Walkthrough Video

[`ADD_EMBEDDED_CODE_HERE`](https://github.com/GloriaXM/kudos-board/assets/112780860/9401f236-6bda-408f-a35d-e956efdb9337)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Kind of. The concepts were straightforward, so I felt equipped to tackle them. I was thrown of, however, by the lack of order in our covered concepts, and the fact that our
lecture material consistently lagged behind what milestones I should have been on at any given time.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

I would definitely have changed how I implemented the search gif function. As mine is now, it only shows a preview of the searched gif, and doesn't give the user any hints on other possible
search options. I tried using the Autocomplete component, but I had issues with the component automatically filtering through search result options. Since I was already generating a filtered array
with the api call, the Autocomplete component's filtering actually eliminated options that I actually wanted to render. I would need to look more into how I can override the default filtering behavior.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Compared to this week, my state management was much more robust. There wasn't really a sequence of button clicks that could mess up the rendering or data storage. My only problem was that

### Open-source libraries used

https://mui.com/material-ui/getting-started/

### Shout out

My manager Mike and peer mentor Phillip for giving me interesting new things to try with my code



