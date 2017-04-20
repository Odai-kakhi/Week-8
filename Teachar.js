import Person from "./Person";

export default class Student extends Teacher {
  constructor(member){
    super(member.firstName , member.lastName)
  }

}
