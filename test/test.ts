import powerAssert from 'power-assert'
const assert = powerAssert

import { traverse } from '../'

describe('traverse()', () => {
  const bar: symbol = Symbol('bar')
  const obj = { foo: [{}, { [bar]: 'baz' }] }
  const tr = traverse(obj)

  it('get() return any', () => {
    assert(tr.get('foo') === obj.foo)
    assert(tr.get('foo', 0) === obj.foo[0])
    assert(tr.get('foo', 1) === obj.foo[1])
    assert(tr.get('foo', 1, bar) === obj.foo[1][bar])
    assert(tr.get('foo', 1, 'qux') === undefined)
  })
})
