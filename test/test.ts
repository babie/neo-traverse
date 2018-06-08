import powerAssert from 'power-assert'
const assert = powerAssert

import { traverse } from '../'

describe('traverse()', () => {
  it('get() return any', () => {
    const bar: symbol = Symbol('bar')
    const obj = { foo: [{}, { [bar]: 'baz' }] }

    assert(traverse(obj).get('foo') === obj.foo)
    assert(traverse(obj).get('foo', 0) === obj.foo[0])
    assert(traverse(obj).get('foo', 1) === obj.foo[1])
    assert(traverse(obj).get('foo', 1, bar) === obj.foo[1][bar])
    assert(traverse(obj).get('foo', 1, 'qux') === undefined)
  })
})
