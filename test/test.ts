import powerAssert from 'power-assert'
const assert = powerAssert

import { traverse } from '../'

it('get value', () => {
  const bar: symbol = Symbol('bar')
  const obj = { foo: [{}, { [bar]: 'baz' }] }

  assert(traverse(obj).get('foo', 0, bar) === undefined)
  assert(traverse(obj).get('foo', 1, bar) === 'baz')
})
