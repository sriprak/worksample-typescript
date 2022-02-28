import { question } from 'readline-sync';
import { MultiValueDictionary } from './types'
import {
  retrieveKeys,
  addKeysMembers,
  displayMembers,
  removeKeyMember,
  removeAllMembers,
  clearDictionary,
  checkIfKeyExists,
  checkIfMemberExists,
  displayAllMembersInDictionary,
  displayAllItemsInDictionary
} from './utils'

let map: MultiValueDictionary = {}

async function run(map: MultiValueDictionary) {
  while ( true ) {
    const input = question( '>' );
    const inputArr = input.split( ' ' )
    const command = inputArr[0].toLowerCase()
    switch (command) {
      case 'keys':
        retrieveKeys( map )
        break
      case 'add':
        const key1 = inputArr[1]
        const value1 = inputArr[2]
        addKeysMembers( map, key1, value1 )
        break
      case 'members':
        const key2 = inputArr[1]
        displayMembers( map, key2 )
        break
      case 'remove':
        const key3 = inputArr[1]
        const value3 = inputArr[2]
        removeKeyMember( map, key3, value3 )
        break
      case 'removeall':
        const key4 = inputArr[1]
        removeAllMembers( map, key4 )
        break
      case 'clear':
        clearDictionary( map )
        break
      case 'keyexists':
        const key5 = inputArr[1]
        checkIfKeyExists( map, key5 )
        break
      case 'memberexists':
        const key6 = inputArr[1]
        const value6 = inputArr[2]
        checkIfMemberExists( map, key6, value6 )
        break
      case 'allmembers':
        displayAllMembersInDictionary( map )
        break
      case 'items':
        displayAllItemsInDictionary( map )
        break
      default:
        console.log( ') Invalid Command' )
        break
    }
  }
}

run( map ).then();