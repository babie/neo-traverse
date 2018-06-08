import { test } from 'ava'

import { traverse } from './'

test('foo', t => {
  const obj = {}
  t.true(traverse(obj) === obj)
})
