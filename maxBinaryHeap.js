//MAX HEAP

class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(ele){
        this.values.push(ele);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const ele = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx -1)/2);
            let parent = this.values[parentIdx];
            if(ele <= parent) break;
            this.values[parentIdx] = ele;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(33);
console.log(heap);