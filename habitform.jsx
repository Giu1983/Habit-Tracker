import React,{Component} from 'react';

class Habitform extends Component{
    constructor(props) {
        super(props); 
    this.state = {
         habit: [], 
         text: ''
              
      };
    }
    
 
onChange = (e) => {
    this.setState({ text: e.target.value });
    
  }
 
onSubmit = (e) => {
    e.prevenDefault(); 
    this.setState({
        habit: '', 
        text: [...this.state.text, this.state.habit]
    }); 
}

removeHabit(habit){
    this.setState({
        habit: this.state.habit.filter(el => el !== habit)
    })
}

render() {
    return (
        <div>
            <form className="HabitForm" onSubmit={this.handleSubmit}>
            <input value={this.state.habit} onChange={this.handleChange} />
            <button type="submit"onClick={this.state.habit}>Add</button>
            <button type="submit"onClick={this.state.habit}>Delete</button>
            </form>     
        </div>
    )
}

}

    
        
export default Habitform;