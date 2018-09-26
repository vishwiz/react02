import React from 'react';

const Course = (props) => {
    return (
     <section>
         <p>COURSES WE OFFER AND THEIR PROFESSOR</p>
         <li>
             <div>
           <strong>PROFESSOR : </strong>    {
                  props.apple.prof
               }
             </div>
             <div>
           <strong>COURSE : </strong>   {
                     props.apple.course
                 }
             </div>
         </li><br/>
     </section>
   )
 }


 export default Course;
