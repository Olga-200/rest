export default class Student {  //defaolt for export only one class
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }
}