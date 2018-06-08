import powerAssert from 'power-assert'
const assert = powerAssert

import { traverse } from '../'

it('return original object', () => {
  const obj = { foo: 'bar' }
  assert(traverse(obj) === { ok: 'yes' })
})
