const {expect} = require('chai');
const Queue = require('../src/queue');


describe('Queue', () =>
{
    it('should add a new element to the queue', async () =>
    {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.dequeue()).to.equals(1);
    });

    it('should add a new element to the rear of the queue that has items', async () =>
    {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).to.equals(1);
    });

    it('should able to dequeue items from the front/head', async () =>
    {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).to.equals(1);
        expect(queue.dequeue()).to.equals(2);
        expect(queue.dequeue()).to.equals(3);
    });

    it('should able check if the queue is full', async () =>
    {
        const queue = new Queue(5);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        expect(queue.isFull()).to.be.true;
    });

    it('should able to check if the queue is empty', async () =>
    {
        const queue = new Queue(5);
        expect(queue.isEmpty()).to.be.true;
    });

    it('should be able to return the front/head element without removing the item', async () =>
    {
        const queue = new Queue(5);
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front()).to.equals(1);
        expect(queue.dequeue()).to.equals(1);
    });

    it('should be able to return the rear/tail element without removing the item', async () =>
    {
        const queue = new Queue(5);
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.rear()).to.equals(2);
    });
});
