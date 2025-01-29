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
        let index = this.values.length - 1;
        const ele = this.values[index];
        while(true){
            let parentIdx = Math.floor((idx -1)/2);
            let parent = this.values[parentIdx];
            if(ele > parent){
                this.values[parentIdx] = ele;
                this.values[idx] = parent;
            }
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);