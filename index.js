import HYFClass from "./HYFClass";

var js = new HYFClass([]);


var jsMembers = [

  {firstName: 'Mauro', lastName: 'Mandracchia', type: 'teacher'},

  {firstName: 'Ali', lastName: 'Barakat', type: 'student'},

  {firstName: 'odai' , lastName: 'kakhi' , type: 'student'}
];

jsMembers.forEach(member=>{
  if(member.type === 'teacher'){
    JS.addTeacher(member)
  }
  else {
    JS.addStudent(member)
  }
});
console.log('student are ', JS.getAllStudent());
console.log('teacher are ', JS.getAllTeacher());
