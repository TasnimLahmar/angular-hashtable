

export class Node {
    private value:string;
    public next:Node | null;

    constructor(v:string,next:Node |null) {
        this.value=v;
        this.next=null;
    }
    public getValue(): string {
        return this.value;
    }

    public getNext(): Node |null {
        return this.next;
    }

    public setValue(value: string): void {
        this.value = value;
    }

    public setNext(next: Node | null): void {
        this.next = next;
    }
    // public setLast(b: boolean): void {
    //     this.last = b;
    // }
    //
    // public isLast(): boolean {
    //     return this.last;
    // }

}
