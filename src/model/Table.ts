import {Node} from './Node';
export class Table {
  private _size: number;
  private _nodes: (Node | null)[];


  constructor(size: number) {
    this._size = size;
    this._nodes = [];
    for(let i=0;i<size;i++){
      this._nodes[i]=null;
    }
    console.log("table:",this._nodes);
  }

  getNodes(): (Node | null)[] {
    return this._nodes;
  }

  setNodes(nodes: (Node | null)[]): void {
    this._nodes = nodes;
  }

  getSize(): number {
    return this._size;
  }

  setSize(size: number): void {
    this._size = size;
  }
  // private nodes: Node[];
    // private size: number;
    //
    // constructor(size: number) {
    //     this.size = size;
    //     this.nodes = new Array<Node>(size);
    //   for (let i = 0; i <= size; i++) {
    //     this.nodes[i] = new Node('', null); // Initialize each element with a new Node object
    //   }
    //
    // }
    //
    // public getNodes(): Node[] {
    //     return this.nodes;
    // }
    //
    // public setNodes(nodes: Node[]): void {
    //     this.nodes = nodes;
    // }
    //
    // public getSize(): number {
    //     return this.size;
    // }
    //
    // public setSize(size: number): void {
    //     this.size = size;
    // }
}
