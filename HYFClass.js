import Student from "./Student";
import Teacher from "./Teacher";

export default class HYFClass {
  constructor(members) {
    this.members = members || [];
    let membersIsArray = this.members instanceof Array;
    if( !membersIsArray){
      throw new Error ('Members should be an arrya!');
    };
  };

    addTeacher(member){
      this.members.push( new Teacher(member))
    };

    addStudent(member){
      this.members.push( new Student(member))
    };
  getAllTeacher(){
      return this.members.filter(member => member instanceof Teacher);
    };
    getAllStudent(){
      return this.members.filter(member => member instanceof Student);
    };

  };
