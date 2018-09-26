import React, {Component} from 'react';
import './student.css';

class Student extends Component {
    constructor(props){
        super(props);
        this.renderForm = this.renderForm.bind(this);
        this.renderStudent = this.renderStudent.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateCourse = this.updateCourse.bind(this);


        this.state = {
            isEditing: false
        }

    }

    toggleState(){
        const isEditing = this.state.isEditing;
        this.setState({
            isEditing : !isEditing
        })
    }

    updateCourse(event){
        console.log(this.input.value)
        event.preventDefault();
        this.props.editCourse(this.props.index , this.input.value);
        this.toggleState();
        }

    renderForm(){
        return(
            <form onSubmit = {this.updateCourse}>
            <input type='text' ref = {(value)=>{
                this.input = value
            }} defaultValue={this.props.maple.course} />
            <button type='submit'>change</button>
            </form>
            )
    }

    renderStudent(){
        return(
            <div>
                <div>
<strong>COURSE : </strong>  {
                    this.props.maple.course
                }
                <button onClick={(event)=>{
                     event.stopPropagation();
                     this.toggleState();
                   }}>change course</button>
                </div>
            <br/>
        </div>
        )
    }

    render() {
        const isEditing =this.state.isEditing
        return(
            <section>
            <div>
            <li>
                <div>
<strong>STUDENT : </strong>  {
                    this.props.maple.name
                }
                </div>
                <div>
          {
            isEditing ? this.renderForm(): this.renderStudent()
          }
    
                </div>
            </li><br/>
        </div>
             </section>
        )
    }
}

export default Student;