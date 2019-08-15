import React, {Component} from 'react'

class AddForm extends Component {
    state = { 
          
            id: null,
            task: null,
            deadline: null,
            checked: true
        }

        handleChange = (e) => {
            this.setState({
               [e.target.id]: e.target.value 
            });
        
        }
        
         handleSubmit = (e) => {
             e.preventDefault();
             this.props.addTodoItem(this.state);
        
     }
        

    render(){
        return(
           <div>
                <form onSubmit= {this.handleSubmit}>
                <label htmlFor="task">Task: </label>
                <input type="text" id="task" onChange={this.handleChange} />
                <label htmlFor="deadline">Deadline: </label>
                <input type="text" id="deadline" onChange={this.handleChange} />
                {/* <label htmlFor="progress">Progress: </label>
                <input type="text" id="progress" onChange={this.handleChange} /> */}
                <button>Submit</button>
                </form>
           </div>
           
        )
    }
}

export default AddForm;