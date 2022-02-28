# App Overview

A Multi-value Dictionary console app built according to the specification. The project uses Typescript, Node, Jest, ReadLine-Sync, etc.

# Setup

Run `npm install`

# Run the app

Run `npm start`

# Tests

Run `npm test`

# Important Commands

1) 'KEYS' - `KEYS`. Retrieve keys from all entries in the dictionary.
2) 'ADD' - `ADD <key> <value>`. This command takes in the key and value from the user and adds the entry into dictionary if it's a new entry or else adds the value to the SET if key is already present.
3) 'MEMBERS' - `MEMBERS <key>`. This command retrieves all values for a certain key and display it in the console.
4) 'REMOVE' - `REMOVE <key> <value>`. This command takes in the key and value input from the user and deletes that value from the SET for that key.
5) 'REMOVEALL' - `REMOVEALL <key>`. This command removes all entries of the key from the SET and later deletes the key from the dictionary as well.
6) 'CLEAR' - `CLEAR`. This command clears the entire dictionary and turns it into an empty object.
7) 'KEYEXISTS' - `KEYEXISTS <key>`. This command returns true if it finds the key else it returns false.
8) 'MEMBEREXISTS' - `MEMBEREXISTS <key> <value>`. This command returns true if it finds the member in the key else it returns false.
9) 'ALLMEMBERS' - `ALLMEMBERS`. This command displays all the members of each key in the dictionary.
10) 'ITEMS' - `ITEMS`. This command iterates through the entire dictionary and displays them on the console.
11) 'FINDKEYS' - `FINDKEYS <value>`. This command takes in the value from the user and finds the appropriate keys under which the value could be found.

