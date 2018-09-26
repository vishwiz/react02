import React, { Component } from 'react';
import './App.css';
import Student from './student.js';
import Course from './course.js';
import AddForm from './addform.js';

class App extends Component {
  constructor(props){
    super(props);
    this.addStudent = this.addStudent.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
    this.updateCourse = this.updateCourse.bind(this);
    this.editCourse = this.editCourse.bind(this);

    this.state = {
        course : [{
            prof: 'Mr. sameer',
            course: 'cse'
        },
        {
            prof: 'Mr. rahul',
            course: 'mech'
        },
        {
            prof: 'Mr. vishal',
            course: 'civil'
        }],
        student : [{
          name: 'rohit',
          course: 'civil'
        },
        {
          name: 'raj',
          course: 'cse'
        },
        {
          name: 'ram',
          course: 'mech'
        }],
        currentCourse: '',
        currentStudent: ''
    }
}
addStudent(event){
  event.preventDefault()
  let student = this.state.student;
  let currentStudent = this.state.currentStudent;
  let currentCourse = this.state.currentCourse;
  student.push({
      name : currentStudent,
      course : currentCourse
  })
  this.setState({
      student: student ,
      currentStudent: '',
      currentCourse : ''
  })
 
}
updateStudent(newValue){
  this.setState({
      currentStudent : newValue.target.value
  });
}
updateCourse(newValue){
  this.setState({
    currentCourse : newValue.target.value
  });
}

editCourse(index,newValue){
  console.log(index,newValue)
  var student = this.state.student;
  var students = student[index];
   students['course'] = newValue;
  this.setState({
      student : student 
  })
}

  render() {
    return (
      <section>

        <AddForm 
        addStudent = {this.addStudent}
        currentStudent = {this.state.currentStudent}
        currentCourse = {this.state.currentCourse}
        updateStudent = {this.updateStudent}
        updateCourse = {this.updateCourse}
        />

        <ul>


          {
            this.state.student.map((stud,index)=>{
              return <Student 
              maple = {stud} 
              key = {index}
              index = {index}
              editCourse = {this.editCourse}
               />

            })
          }
          </ul>

          <ul>
            {
              this.state.course.map((course,index)=>{
                return  <Course 
                apple = {course}
                key = {index}
                />
              })
            }
          </ul>
        
      </section>
    );
  }
}

export default App;
