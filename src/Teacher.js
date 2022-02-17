import Person from './Person';

class Teacher extends Person {
  constructor(name, age, gendor, interests) {
    super(name, age, gendor, interests);
    this.subject = 'Biology';
  }
}
export default Teacher;
