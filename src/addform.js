import React from 'react';

const AddForm = (props) => {
    return (
     <section>
         <form onSubmit = {props.addStudent}>
         <input type = 'text' 
         value={props.currentStudent} 
         onChange = {props.updateStudent} 
         placeholder = 'student name'
         required />
         <input type = 'text' 
         value={props.currentCourse} 
         onChange = {props.updateCourse} 
         placeholder = 'course' 
         required />
         <button type = 'submit'>submit</button>
         </form>
     </section>
   )
 }


 export default AddForm;