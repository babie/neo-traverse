export class Traverse {
  private obj: object

  constructor(obj: object) {
    this.obj = obj
  }

  get(...path: any[]): any {
    let node: any = this.obj
    for (const p of path) {
      if (node && node.hasOwnProperty(p)) {
        node = node[p]
      } else {
        node = undefined
        break
      }
    }
    return node
  }
}

export const traverse: (obj: object) => Traverse = function(
  obj: object
): Traverse {
  return new Traverse(obj)
}
export default traverse
