import React from "react";
import "./index.css";


// Components
import HistoryTracker from './Components/HistoryTracker';
import Welcomepage from './Components/welcomepage';
import Habitform from './Components/habitform'; 

// import EditPage from './Components/EditPage';
// import './Components/HabitReminder';
// import Profilepage from './Components/Profilepage';
// import 'bootstrap/dist/css/bootstrap.css'; 
// import 'font-awesome/css/font-awesome.css';

class App extends React.Component {

    state = {
        habits: []
    }

    addHabits = (habit) => {
        this.setState({
            habits: [habit, ...this.state.habits]
        });
    };


    render() {
        return (
            <div>
                <Welcomepage onSubmit={this.addHabits} />
                <Habitform  habit={this.state.habit} removeTodo={this.removeHabit} />
                <HistoryTracker habits={this.state.habits} />
            </div>
        )
    }
}




export default App; 