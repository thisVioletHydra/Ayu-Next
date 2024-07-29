class MyClass {
  name: string;
  constructor(parameters) {
    this.name = this.constructor.name;
  }
}

export const MyClassName = new MyClass({});