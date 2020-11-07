class Queue
{
    _elements = [];
    _size = 0;
    constructor(size) {
        this._size = size;
    }
    enqueue(element)
    {
        this._elements.push(element);
    }

    dequeue()
    {
        return this._elements.shift();
    }

    isFull()
    {
        return this._elements.length >= this._size;
    }

    isEmpty()
    {
        return this._elements.length === 0;
    }

    front()
    {
        return this._elements[0];
    }

    rear()
    {
        return this._elements[this._elements.length - 1];
    }
}

module.exports = Queue;
