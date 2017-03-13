# Galvanize Group Project Proposal



## Team Name

Team PBJs

## Group Members
Patrick Rauls, Ben Matson, Jeff Diers, Steve VanWoerkom

## Project/Application Name

Mettle - A Market Trading game in space

## Project Description

A single-player game where the player takes on the role of a market trader. They begin the game in-debt, and must travel to one of six markets each season to buy and sell resources in the hopes of making enough money to recover from their debt. Travelling between markets sometimes triggers the occurence of an "event" where the player has to choose between multiple options. The choice made may impact the player or market they are visiting positively or negatively.

This game concept was inspired by the 1974 game ["Star Trader"](https://en.wikipedia.org/wiki/Star_Trader).

## Who uses it?

People interested in playing a casual strategy game experience.

## What outputs do they need?

The game interface should change to reflect the actions the player has taken over the course of the game. This includes reflecting shopping cart changes, resource value changes, menu choices, and game flow transitions.

## What inputs are needed to generate those outputs?

The landing page requires users to sign-in with google. All gameplay inputs will be based on click/touch events.

## What technologies do you plan to use?

- Google Identity API
- SQLite3
- Knex
- React Native
- Express
- Node
- Mocha, Chai

## Feature list

## MVP

- The player must login with google identity to play the game.
- The player's game state is automatically saved during gameplay, and can be continued from during a later session.
- The player's score is placed on their local and the global scoreboards at the end of the game.
- A landing page with options to start a new game login/continue an existing game, view the how-to page, and view the scoreboards.
- A how-to page explaining the game, accessible from the Title screen and through .
- A shopping cart page with styling that changes depending on which of the six shops you're visiting representing the six market regions in the game. The functionality and layout of each of these shopping carts is the same, but shop inventory quantities and valuations vary from market to market.
- Each season, the active market prices and inventory quantity are determined by a combination of values from the specific active market, the particular resource, and some random number generation formula.
- Players have a weight limit for how many resources they are allowed to have at one time. Some resources are heavy, others are not.
- Player should have visibility of their current money total, resource total, and current/maximum carrying capacity at all times.
- A transition page for choosing the market they want to trade in each season.
- At the very beginning of a new game and after finishing trading on seasons 7, 14, 21, and 31 a plot event occurs. These events provide the important context for the player by outlining the state of being in debt and the progress made towards getting out of debt.
-If the player has not paid off their debt after 21 seasons, the game should end immediately in defeat. Otherwise players should be given the option to retire successfully, or continue for 10 more seasons and attempt a high-score. After 31 seasons, the game ends.

## Stretch

- Unique color scheme, branding logo, and styling customization for each market.
- Each market should have a hidden purchase option that becomes visible and available for purchase once the player has met the unique condition. The conditions and benefits provided by these hidden options should be varied, but in general they should provide some sort of quality-of-life improvement like increased cargo capacity.
- A table of events with multiple-choice outcomes for the player, with varied effects depending on the event and choice made.
- A table of triggered events that happen once per game each if their triggering condition is met.
- A victory/defeat page with global leaderboard and personal high score tables. Includes an option to start a new game.
- Each season, the active market has an additional "package deal", which is a collection of varied quantities of multiple resources bundled together as a single purchase at a (usually) favorable price point.
- Adding complexity to the time spent at market: At the beginning of a season a random price velocity (between -30% and 30% of total range) is determined for each resource price across it's established range. The current price immediately updates to the new value. If this velocity would put the price past the edge of it's range, then the price becomes the range limit, and a new random velocity is rolled for that resource.
- Player can play in an "offline" mode that doesn't track scores, but is available when no internet is present.
- A player's buy/sell/planet visit frequency data gets uploaded to the server, and the server uses that data to adjust prices and planet modifiers based on high/low usage statistics.
- Sound effects to add to the player experience.
