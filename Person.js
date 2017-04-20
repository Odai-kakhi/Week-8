import Person from "./Person";

export default class Student extends Person {
constructor(firstName , lastName){
  this.firstName = firstName || 'notset';
  this.lastName=lastName ||'notset';
}
  getFirstName(){
    return this.firstName();
  }

  getLastName(){
    return this.lastName();
  }
};
