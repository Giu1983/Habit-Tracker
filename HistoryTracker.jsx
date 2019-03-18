import React, { Component } from "react";

class History extends Component {
  state = {
    activities: {
      habitsId: "",
      date: "",
      time: ""
    },
    habits: [
      "Drink Water",
      "Watch 2 Course Lectures",
      "Read 2 Chapters",
      "Jogging",
      "Learn Deutsch"
    ]
   
  };

  

  handleNextHabit = () => {
    this.setState({ nextHabit: this.state.nextHabit + 1 });
  };


  //below alert for the task


  renderHabits() {
  if (this.state.habits.length === 0) return alert("Remind to do ''");
    return (
      <ul>
        {this.state.habits.map(habit => (
          <li key={habit}>{habit}</li>
        ))}
      </ul>
    );
  }


  //below function to schedule and set alert if the task is not done in time
  
   
  scheduleHabit() {
    if(requestIdleCallback in window){
      requestIdleCallback("Habit", { timeout: 3000}); 
    }
    else{
      while(habit.length)
       setTimeout(habit.shift(), 1);
    }
    function habit(deadline){
      while(deadline.timeRemaining() > 0 && habit.length > 0) {
        habit.shift()(); 
      }
      if(habit.length > 0) {
        requestIdleCallback(habit); 
      }
    }
  }

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
   

  render() {
    

    return (
      <div>
        {this.state.habits.length === 0 && alert("Wrong Attitude!")}
        {this.renderHabits()}
        <span style={this.styles} className={""} />
        <button onClick={this.handleNextPage} className="btn btn-primary">Prev</button>
        <button onClick={this.handlePreviousPage} className="btn btn-secondary">Next</button>
      </div>
    );
  }


}

export default History;
