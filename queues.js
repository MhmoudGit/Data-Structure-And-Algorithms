class Queue {
    constructor() {
        this.collection = []
        this.print = () => {
            console.log(this.collection)
        }
    }
    enqueue = (element) => {
        return this.collection.push(element)
    }
    dequeue = (element) => {
        return this.collection.shift(element)
    }
    front = () => {
        return this.collection[0]
    }
    size = () => {
        return this.collection.length
    }
    isEmpty = () => {
        return (this.collection.length === 0)
    }
}

const q = new Queue()

q.enqueue('a')
q.enqueue(q.isEmpty())
q.enqueue(q.size())
q.dequeue()
q.print()