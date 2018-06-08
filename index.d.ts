export declare class Traverse {
    private obj;
    constructor(obj: object);
    get(...path: any[]): any;
}
export declare const traverse: (obj: object) => Traverse;
export default traverse;
