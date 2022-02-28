import { MultiValueDictionary } from './types'

/*
* This function returns a list of all keys available in the dictionary
* */
export const retrieveKeys = (map: MultiValueDictionary) => {
  const keys = Object.keys(map)
  if (keys.length === 0) {
    console.log( ') empty set') // No keys in the map
  } else {
    let idx: number = 0
    for(const key of keys) {
      idx += 1 // counter for index
      console.log(`${ idx }) ${key}`) // display key in the map
    }
  }
}

/*
* This functions adds key and member to the dictionary object
* */
export const addKeysMembers = (map: MultiValueDictionary, key: string, value: string) => {
  /* check if key exists in a map */
  if (map[key]) {
    const hasValue: boolean = map[key].has(value) // check to find if the value is already present in the key set
    if (!hasValue) {
      map[key].add(value) // adds the value on to the set
      console.log(') ADDED')
    } else {
      console.log(`) ERROR, ${value} already exists in ${key}`) // returns error, if the value is present
    }
  } else {
    map[key] = new Set<string>().add(value) // initializes the set and adds the value to it
    console.log(') ADDED')
  }
}

/*
* This function would display all the members of a provided key
* */
export const displayMembers = (map: MultiValueDictionary, key: string) => {
  // if key not present, displays error
  if (!map[key]) {
    console.log(`) ERROR, ${key} does not exists`)
  } else {
    const members: string [] = Array.from( map[key].values() ) //creates an array by iterating over the set values method
    let idx: number = 0
    for ( const member of members ) {
      idx += 1
      console.log( `${ idx }) ${ member }` ) // display the key
    }
  }
}

/*
* This function removes a particular member from the key set
* */
export const removeKeyMember = (map: MultiValueDictionary, key: string, value: string) => {
 // if member present in key set
 if ( map[key].has( value ) ) {
    map[key].delete( value ) // deletes the member
    if ( map[key].size > 0 ) {
      console.log( ') REMOVED' )
    } else {
      delete map[key] // deletes the key when the member size is 0
      console.log( ') REMOVED' )
    }
  } else {
    console.log( `) ERROR, ${ value } does not exist in ${ key }` ) // errors out when value is not present in the key
  }
}

/*
* This functions removes all the members for a key provided
* */
export const removeAllMembers = (map: MultiValueDictionary, key: string) => {
  if ( map[key] && map[key].size > 0 ) {
    map[key].clear() // clears the set
    delete map[key] // deletes the key from dictionary
    console.log( ') REMOVED' )
  } else {
    console.log( `) ERROR, ${ key } does not exist` ) // errors out if key does not exist
  }
}

/*
* Clears the whole dictionary
* */
export const clearDictionary = (map: MultiValueDictionary) => {
  // iterate over map, to delete all keys and values
  for(let i in map) {
    delete map[i] // deletes key-value pair
  }
  console.log( ') CLEARED' )
}

/*
* Checks if a key exists in the dictionary or not
* */
export const checkIfKeyExists = (map: MultiValueDictionary, key: string) => {
  if ( map[key] ) {
    console.log( ') true' )
  } else {
    console.log( ') false' )
  }
}

/*
* Checks if a member in the key exists or not
* */
export const checkIfMemberExists = (map: MultiValueDictionary, key: string, value: string) => {
  if ( map[key].has( value ) ) {
    console.log( ') true' )
  } else {
    console.log( ') false' )
  }
}

/*
* Displays all members of all keys in the dictionary
* */
export const displayAllMembersInDictionary = (map: MultiValueDictionary) => {
  // checks to see if keys are present or not
  if ( Object.keys( map ).length === 0 ) {
    console.log( '( empty set )' )
  } else {
    const values = Object.values( map ) // gets the values of the dictionary
    const valueArr = values.map( (val: Set<string>) => Array.from( val.values() ) ) // creates an iterator of all values by the Set
    const result = valueArr.reduce( (acc, curr) => {
      acc.push( ...curr )
      return acc
    }, [] ) // flattens the result array
    let idx: number = 0
    for ( let res of result ) {
      idx += 1
      console.log( `${ idx }) ${ res }` ) // outputs each member in the dictionary
    }
  }
}

/*
* displays all items in the dictionary. Similar to displayAllMembersInDictionary
* */
export const displayAllItemsInDictionary = (map: MultiValueDictionary) => {
  // checks to see if keys are present or not
  if ( Object.keys( map ).length === 0 ) {
    console.log( '( empty set )' )
  } else {
    let idx: number = 0
    for ( const [ key, value ] of Object.entries( map ) ) { // iterate over each entry inside the dictionary
      const data = Array.from( value.values() )
      for ( const elem of data ) {
        idx += 1
        console.log( `${ idx }) ${ key }: ${ elem }` )
      }
    }
  }
}

/*
* finds the keys to which a member belongs
* */
export const findKeysForValue = (map: MultiValueDictionary, value: string) => {
  // checks to see if keys are present or not
  if ( Object.keys( map ).length === 0 ) {
    console.log( '( empty set )' )
  } else {
    const keys = Object.keys(map)
    const keysArr: Array<string> = []
    let idx: number = 0
    for (const key of keys) {
      if (map[key].has(value)) {
        keysArr.push(key)
      }
    }
    if (keysArr.length > 0) {
      for(const key of keysArr) {
        idx += 1
        console.log(`${idx}) ${key}: ${value}`)
      }
    } else {
      console.log(`) ERROR, ${value} was not found in the dictionary`)
    }
  }
}