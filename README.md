# Snake Client Project 🐍

Snake game is a very popular video game. This is a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/kazvee/snek-multiplayer).

## Final Product

!['Game Server Screenshot'](/images/GameServerScreenshot.jpg 'Gameplay: Snake getting into position to eat a red dot')

!['Client Terminal Screenshot'](/images/ClientTerminalScreenshot.jpg 'View of Client Terminal')

## Purpose

This project was created by [me](https://github.com/kazvee) as part of my learnings at [Lighthouse Labs](https://www.lighthouselabs.ca/en/web-development-flex-program).

## Dependencies

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com)

Node version 12.x and npm version 6.x were used during game client development & testing.

## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command

## How to Play
- Move the snake over the red dots to eat them and grow looooonger 🐍
- Be careful not to steer the snake into walls, other snakes, or its own tail
  - Collisions *really* annoy the snake and the first one will mean `Game Over`
- Have fun 😀

## Keyboard Controls

- Use your `W` `A` `S` `D` keys to navigate your snake `up`, `left`, `down`, and `right`
- Send some friendly banter to other players using numbered keys `1`, `2`, and `3`
- To exit the game, press `Ctrl+C`

## Acknowledgements

The snek server code was not written from scratch. It is a heavily modified version of the single player game [Snek](https://github.com/taniarascia/snek) created by [Tania Rascia](https://github.com/taniarascia).