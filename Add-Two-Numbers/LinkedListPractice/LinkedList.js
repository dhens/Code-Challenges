const LinkedListNode = require('./LinkedListNode');

class LinkedList {
    constructor(value) {
        this.size = 0;
        this.head = null;
        this.tail = null;

        if (value) {
            if (Array.isArray(value)) return this.fromArray(value);
            return new TypeError(`${value} is not iterable`);
        }

        return this;
    }


    prepend(value) {
        this.size++;

        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
            return this;
        }
    }

    append(value) {
        this.size++;

        const newNode = new LinkedListNode(value, this.head);

        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    fromArray(list) {
        list.forEach(element => this.append(element));
        return this;
        };
    }
}

module.exports = LinkedList;