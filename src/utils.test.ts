import { retrieveKeys, addKeysMembers, displayMembers, displayAllMembersInDictionary, displayAllItemsInDictionary, checkIfMemberExists, checkIfKeyExists, removeAllMembers, removeKeyMember, clearDictionary } from './utils'

test('Should return empty set', () => {
  const map = {}
  console.log = jest.fn()
  retrieveKeys(map)
  expect(console.log).toHaveBeenCalledWith(') empty set')
})

test('Should return keys', () => {
  const map = {
    "foo": new Set<string>().add("bar").add("baz"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  retrieveKeys(map)
  expect(console.log).toHaveBeenCalledTimes(2)
})

test('Add key and members to the dictionary', () => {
  let map = {}
  console.log = jest.fn()
  addKeysMembers(map, 'foo', 'bar')
  addKeysMembers(map, 'foo', 'baz')
  expect(console.log).toHaveBeenCalledWith(') ADDED')
  expect(console.log).toHaveBeenCalledTimes(2)
})

test('returns an error if key and value already present', () => {
  let map = {}
  console.log = jest.fn()
  addKeysMembers(map, 'foo', 'bar')
  expect(console.log).toHaveBeenCalledWith(') ADDED')
  addKeysMembers(map, 'foo', 'bar')
  expect(console.log).toHaveBeenCalledWith(') ERROR, bar already exists in foo')
  expect(console.log).toHaveBeenCalledTimes(2)
})

test('display members of a certain key', () => {
  const map = {
    "foo": new Set<string>().add("bar").add("baz"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  displayMembers(map, 'foo')
  expect(console.log).toHaveBeenCalledTimes(2)
  expect(console.log).toHaveBeenCalledWith('1) bar')
  expect(console.log).toHaveBeenCalledWith('2) baz')
})

test('returns error if a given key is not present in the dictionary', () => {
  const map = {
    "foo": new Set<string>().add("bar").add("baz"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  displayMembers(map, 'hello')
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith(') ERROR, hello does not exists')
})

test('removes member from a key', () => {
  const map = {
    "foo": new Set<string>().add("bar").add("baz"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  removeKeyMember(map, 'foo', 'bar')
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith(') REMOVED')
})

test('does not remove a member from a key, if not present', () => {
  const map = {
    "foo": new Set<string>().add("bar"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  removeKeyMember(map, 'foo', 'baz')
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith(') ERROR, baz does not exist in foo')
})

test('removes all members of a certain key', () => {
  const map = {
    "foo": new Set<string>().add("bar"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  removeAllMembers(map, 'bang')
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith(') REMOVED')
})

test('removes nothing if certain key is not present', () => {
  const map = {
    "foo": new Set<string>().add("bar"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  removeAllMembers(map, 'hello')
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith(') ERROR, hello does not exist')
})

test('clears dictionary', () => {
  const map = {
    "foo": new Set<string>().add("bar"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  clearDictionary(map)
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith(') CLEARED')
})

test('returns true if key exists', () => {
  const map = {
    "foo": new Set<string>().add("bar"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  checkIfKeyExists(map, 'bang')
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith(') true')
})

test('returns false if key does not exists', () => {
  const map = {
    "foo": new Set<string>().add("bar"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  checkIfKeyExists(map, 'hello')
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith(') false')
})

test('returns true if member key in the key', () => {
  const map = {
    "foo": new Set<string>().add("bar"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  checkIfMemberExists(map, 'bang', 'baz')
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith(') true')
})

test('returns false if a member does not exists in the key', () => {
  const map = {
    "foo": new Set<string>().add("bar"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  checkIfMemberExists(map, 'bang', 'hello')
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith(') false')
})

test('displays all members inside the dictionary', () => {
  const map = {
    "foo": new Set<string>().add("bar").add("baz"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  displayAllMembersInDictionary(map)
  expect(console.log).toHaveBeenCalledTimes(4)
  expect(console.log).toHaveBeenCalledWith('1) bar')
  expect(console.log).toHaveBeenCalledWith('2) baz')
  expect(console.log).toHaveBeenCalledWith('3) bar')
  expect(console.log).toHaveBeenCalledWith('4) baz')
})

test('displays nothing if members are empty', () => {
  const map = {}
  console.log = jest.fn()
  displayAllMembersInDictionary(map)
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith('( empty set )')
})

test('displays all items in the dictionary', () => {
  const map = {
    "foo": new Set<string>().add("bar").add("baz"),
    "bang": new Set<string>().add("bar").add("baz")
  }
  console.log = jest.fn()
  displayAllItemsInDictionary(map)
  expect(console.log).toHaveBeenCalledTimes(4)
  expect(console.log).toHaveBeenCalledWith('1) foo: bar')
  expect(console.log).toHaveBeenCalledWith('2) foo: baz')
  expect(console.log).toHaveBeenCalledWith('3) bang: bar')
  expect(console.log).toHaveBeenCalledWith('4) bang: baz')
})

test('displays nothing if map is empty', () => {
  const map = {}
  console.log = jest.fn()
  displayAllItemsInDictionary(map)
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith('( empty set )')
})