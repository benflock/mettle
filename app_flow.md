# App Pages:

## Title:
- Login / Logout button changes depending on context
  - Clicking on login shows the login/signup page
  - Clicking on logout pops up "confirm" and "cancel" buttons.
  - If logged in and player has an 'in progress' game, the 'Continue' button is visible.
  - If logged in, the 'New Game' button is visible.
  - 'Scoreboard' button takes you to the scoreboard page
  - 'How-to' button takes you to the how-to page

## Login:
- There is a button to login to google.
  - This takes you through the login flow.
- Once logged in, there is a text field here where you can set your display name. 4-12 Alphabet characters only, validate against vulgarity.
- There is a button to

## Overlay:
- Visible on Star Map, Shop, and Event pages
- Takes up top/bottom edge of page
- Shows Credits #, Round #, Cargo Weight current/max
- clicking on cargo weight expands the overlay on top of the current page.
  - expanded overlay mutes other click events on page
  - click again to shrink
  - expanded overlay has icon, qty, weight for each resource possessed
  - has buttons to quit/logout

## Star Map:
- The planet I am on should be highlighted.
  - description to that planet appears if no other planets selected.
- When I click on another planet:
  - the path to that planet is highlighted
  - the description to that planet appears
  - a 'confirm travel' button appears
    - clicking on this button transitions you to the shop page for that planet.
- When I click on a selected planet: deselect that planet

## Shop:
- If I have the 'Buy' tab highlighted(default), I see a list of resources to buy, including quantity and price per.
- If I have the 'Sell' tab highlighted(default), I see a list of resources I possess to sell, including quantity and price per.
- I can click on a resource to select it for trading.
- I see a slider that lets me adjust how many units i'm trading.
- If I have a resource selected, I can see the 'make a trade' button, which performs the transaction.
- There is a button to end the trading round and return to your ship. Clicking on this pops up confirmation / cancel buttons.
  - Confirmation advances the round and moves you to the star map. Cancel takes you back to the shop.

## Event:
- Can happen when transitioning from star map to shop, or vice versa.
- I see the event name, description, and buttons for each option available.
- Clicking on an option replaces the description with text for the outcome, adjusts my resources according to the option selected, and replaces all option buttons with a single "Click to continue" button.

## Scoreboard:
- Two Scoreboard lists are displayed here: the top 5 global scores, and top 5 personal scores (if logged in).
- There is an option to return to the title screen.

## How-to:
- Static page with text describing what the story is, how to play the game, the game-end conditions, and the resources.
- There is an option to return to the title screen.

---

# App flow:

Title:
  Displays the game title logo, sizzle graphic, and various menu options depending on player state.
  If player is not logged-in to google, they see a 'Log in' button.
  If player is logged-in to google, they see a 'Log out' button, and a button for 'New Game'. If the loaded player data has a round > 1, a button for 'Continue' is also displayed.
  Clicking on New Game resets player values to default and begins the game.
  Clicking on Continue game maintains existing player values and takes the player to the star map.
  Buttons to the scoreboard and how-to pages are always displayed.

How-to:
  The only clickable thing on this page is a 'Back' button that returns you to where you came from (Title or Overlay)

Scoreboard:
  Displays the top 5 global scores.
  If player is logged in to google, also displays the top 5 personal scores.
  The only clickable thing on this page is a 'Back' button that returns you to the title screen.

Login/Signup:
  A 'login with Google' button is displayed, which runs you through Google's sign-in flow.
  If signed in, an editable text field labelled 'Display Name' is displayed. The field only accepts alphabet characters, and must be between 3-12 characters in length. The name is validated against common vulgarity and uniqueness among other players.
  A disabled 'Register Display Name' button is present. The button becomes enabled once the client side validation passes.
  When the 'Register Display Name' button is clicked, the server checks to see if the name is unique. If it is, the Display Name is added to the player, and they are returned to the Title Screen. If it isn't unique, they are prompted to enter a different name.

New Game:
  Player's values set to default,
  Show Event page populated with plot event 1 (ok is only option),
  Show star map with known planets

Star Map:
  first, check for event. if event: run event, then restart this transition.
  display description of current planet (open space if round 1).
  display icons for known planets.
  clicking on a planet icon highlights it, shows the planet description, draws a path between it and your current planet, and shows the 'confirm travel' button to get to that planet.
  clicking on your current planet changes the 'confirm travel' button to 'stay on this planet'.
  clicking on the confirm/stay button triggers the shop.

Shop:
  first, check for event. if event: run event, then restart this transition.
  Determine which planet's shop is being viewed. Load correct stylesheet and planet_resource values.
  Roll ranges for each resource qty and cost at the beginning of the round.
  Get current resource quantities for the player.
  Default to the 'Buy' tab, showing resources the player can buy. Clicking the 'Sell' tab changes to a list of resources the player can sell.
  A listed resource includes the resource name, icon, price(per unit), quantity available, and weight(per unit).
  The slider at the bottom determines how many resources are bought/sold in a single click of the 'Make Trade' button.
  Clicking the 'Make Trade' button finalizes and transacts
  Update resource quantities after each trade. This should hide any out-of-stock resources, and show any resources with new stock.
  If in buying mode, and the selected price*quantity is more than the player has, the 'Make Trade' button is disabled and the text changes to 'Not enough Credits'.
  If in buying mode, and the selected weight*quantity is more than the player has, the 'Make Trade' button is disabled and the text changes to 'Not enough Cargo Capacity'.

Event:
  Clicking one of the option buttons on an event updates the event page. The description changes to the consequence text for the chosen option, the option buttons are removed and replaced with a single 'Continue' button, and the player's resources are adjusted.
  Clicking on the 'Continue' button concludes the event, and moves the player to the menu they were headed to (Star Map or Shop).

Overlay:
  The overlay is always visible on the Star Map, Shop, and Events pages.
  The player can always see their credit total, what round it is, and their cargo current/total weight.
  Clicking on the cargo weight section of the overlay expands a pane over the current view with a complete list of cargo with quantity and weight. Clicking cargo weight again will shrink and hide the info pane.
  There are also buttons on this expanded overlay to view the how-to page, or quit the game.
  The How-to button should display the how-to page on top of the current page (on top of the overlay too).
  The Quit button should prompt a notification explaining that the game will be saved at the end of the last trading round. Confirmation and cancel buttons will appear.
  Cancel returns you to the page you're on with the overlay expanded.
  Confirm returns you to the title page.
