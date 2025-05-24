# TOP-Project-Rock_Paper_Scissors

The Odin Project - Foundations Course Project: Rock Paper Scissors

Skill level: JavaScript Basics.

Object: The creation of the game Rock Paper Scissors, between the human/user and the computer. The user will be able to choose between Pock - Paper - Scissors by clicking on the corresponding button, and the game will be completed when one of the two sides wins 5 rounds.

## Game Execution Flow

1.  Game starts with playGame()
2.        1.1  Checks if someone has reached 5 points
3.        1.2  Displays the current round
4.        1.3  Calls the getHumanChoice()
5.          1.3.1  Adds the event listeners to the buttons
6.          1.3.2  Waits for the user's click to start the event
7.          1.3.3  Calls the clickChoices()
8.              1.3.3.1  Takes the user's click choice
9.              1.3.3.2  Removes the event listeners
10.            1.3.3.3  Calls the callback() with the click choice as an argument
11.                  1.3.3.3.1  Calls the startRound()
12.                          1.3.3.3.1.1  Takes the computer choice through computerChoice()
13.                          1.3.3.3.1.2  Checks who wins the round
14.                  1.3.3.3.2  Increase the round counter
15.                  1.3.3.3.3  Calls the playGame() (step 1)
16.                          1.3.3.3.3.1  Checks if someone has reached 5 points (step 2)
17.                          1.3.3.3.3.2  Begins the next round with the call of getHumanChoice() (step 4)
