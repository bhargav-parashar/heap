A Max Heap is a specialized binary tree-based data structure that maintains a specific order among its elements. It follows these two key properties:

Heap Property: The value of each parent node is always greater than or equal to the values of its child nodes.
Complete Binary Tree: The heap is always a complete binary tree, meaning all levels are fully filled except possibly the last level, which is filled from left to right.
Operations on a Max Heap
Insertion: Insert a new element at the end and "heapify up" to restore the heap property.
Deletion (Extract Max): Remove the root (largest element), replace it with the last element, and "heapify down."
Heapify: Reorganizes the heap to maintain the max heap property.
Heap Sort: A sorting algorithm using the max heap to sort an array in ascending order.

-Time Complexity
Insertion: 𝑂(log𝑛)

