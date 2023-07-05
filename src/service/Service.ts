import {Node} from '../model/Node';
import {Table} from '../model/Table';

export class Service {
    private table: Table;

    constructor(table: Table) {
        this.table=table;
    }
    public getTable():Table{
        return this.table;
    }
    public setTable(table:Table){
      this.table=table;
    }
    public add(v:string):boolean{
        const index=this.hash(v);
        const n=new Node(v,null);
        n.setLast(true);
        let list = this.table.getNodes()[index];
        let  nc=list;
        if (!this.find(v)){
            if(list === null){
                list=n;
            }else{
                while(nc!.next!==null){
                     nc=nc!.next;
                }
                nc!.next=n;
            }
            this.table.getNodes()[index]=list;

            return true;
        }else{
            return false;
        }

    }
    public remove(v: string): boolean {
        let state = false;
        const index = this.hash(v);
        let list: Node | null = this.table.getNodes()[index];
        let previous = null;

        if (this.find(v)) {
            while (list !== null) {
                if (list.getValue() === v) {
                    if (previous === null) {
                        this.table.getNodes()[index] = <Node>list.getNext();
                    } else {
                        previous.setNext(list.getNext());
                    }
                }
                previous = list;
                list = list.getNext();
            }
            return true;
        } else {
            return false;
        }
    }
    public hash(value: string): number {
        let s = 0;
        for (const i of value) {
            s = s * 31 + i.charCodeAt(0);
        }
        return Math.abs(s % this.table.getSize());
    }
    public find(v: string): boolean {
        let state = false;
        const index = this.hash(v);
        let list: Node | null = this.table.getNodes()[index];

        while (list !== null) {
            if (list.getValue() === v) {
                state = true;
                break;
            } else {
                list = list.getNext();
            }
        }
        return state;
    }

    // public list(): void {
    //     for (let i = 0; i < this.table.getNodes().length; i++) {
    //         process.stdout.write(i + '--');
    //         let n: Node | null = this.table.getNodes()[i];
    //         while (n !== null) {
    //             process.stdout.write(n.getValue() + '--');
    //             n = n.getNext();
    //         }
    //         console.log('null');
    //     }
    //     /*
    //     The original implementation of the list method is unchanged as it is already compatible with TypeScript.
    //     You can use the `console.log` function to print the output to the console.
    //     */
    // }

}
