import { MultiValueDictionary } from './types'

export const retrieveKeys = (map: MultiValueDictionary) => {
  const keys = Object.keys(map)
  if (keys.length === 0) {
    console.log( ') empty set')
  } else {
    let idx: number = 0
    for(const key of keys) {
      idx += 1
      console.log(`${ idx }) ${key}`)
    }
  }
}

export const addKeysMembers = (map: MultiValueDictionary, key: string, value: string) => {
  if (map[key]) {
    const hasValue: boolean = map[key].has(value)
    if (!hasValue) {
      map[key].add(value)
      console.log(') ADDED')
    } else {
      console.log(`) ${value} already exists in ${key}`)
    }
  } else {
    map[key] = new Set<string>().add(value)
    console.log(') ADDED')
  }
}

export const displayMembers = (map: MultiValueDictionary, key: string) => {
  const members: string [] = Array.from( map[key].values() )
  let idx: number = 0
  for ( const member of members ) {
    idx += 1
    console.log( `${ idx }) ${ member }` )
  }
}

export const removeKeyMember = (map: MultiValueDictionary, key: string, value: string) => {
  if ( map[key].has( value ) ) {
    map[key].delete( value )
    if ( map[key].size > 0 ) {
      console.log( ') REMOVED' )
    } else {
      delete map[key]
      console.log( ') REMOVED' )
    }
  } else {
    console.log( `) ERROR, ${ value } does not exist in ${ key }` )
  }
}

export const removeAllMembers = (map: MultiValueDictionary, key: string) => {
  if ( map[key] && map[key].size > 0 ) {
    map[key].clear()
    delete map[key]
    console.log( ') REMOVED' )
  } else {
    console.log( `) ERROR, ${ key } does not exist` )
  }
}

export const clearDictionary = (map: MultiValueDictionary) => {
  for(let i in map) {
    delete map[i]
  }
  console.log( ') CLEARED' )
}

export const checkIfKeyExists = (map: MultiValueDictionary, key: string) => {
  if ( map[key] ) {
    console.log( ') true' )
  } else {
    console.log( ') false' )
  }
}

export const checkIfMemberExists = (map: MultiValueDictionary, key: string, value: string) => {
  if ( map[key].has( value ) ) {
    console.log( ') true' )
  } else {
    console.log( ') false' )
  }
}

export const displayAllMembersInDictionary = (map: MultiValueDictionary) => {
  if ( Object.keys( map ).length === 0 ) {
    console.log( '( empty set )' )
  } else {
    const values = Object.values( map )
    const valueArr = values.map( (val: Set<string>) => Array.from( val.values() ) )
    const result = valueArr.reduce( (acc, curr) => {
      acc.push( ...curr )
      return acc
    }, [] )
    for ( let i in result ) {
      console.log( `${ parseInt( i ) + 1 }) ${ result[i] }` )
    }
  }
}

export const displayAllItemsInDictionary = (map: MultiValueDictionary) => {
  if ( Object.keys( map ).length === 0 ) {
    console.log( '( empty set )' )
  } else {
    let i: number = 0
    for ( const [ key, value ] of Object.entries( map ) ) {
      const data = Array.from( value.values() )
      for ( const elem of data ) {
        i += 1
        console.log( `${ i }) ${ key }: ${ elem }` )
      }
    }
  }
}