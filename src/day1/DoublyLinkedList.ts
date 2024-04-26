export default class DoublyLinkedList<T> {
    public length: number;

    

    constructor() {
    }

    prepend(item: T): void {

}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}
//ekta single linked list arekta double linked list, double linked list e ekta node er 2 ta pointer thake, ekta next ar ekta previous
//linked list e O(1) insert, delete/remove,prepend/append(append: Add something to the end. prepend: Add something to the beginning. ) getting head/tail(karon we hve defined pointer to that,same bhabe delettion from heador tail constanr) (eta hocche constant operation,not variable:variable hoile
// input er upor nirbhor //deletion in the middle hoile duita operation
//) ,input er upor nirbhor kore nah, 
//mane linked list kotoboro doesnt matter 
//linked list e index nai,shb gula hoitese node, array e index thake, array e index diye access kora jay, linked list e na