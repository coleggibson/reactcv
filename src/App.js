import React, {Component} from "react";
import General from "./components/General";

class App extends Component{
  constructor() {
    super();

    this.state = {
      Name: {
        text:'',
        content:''
      },
      Email: {
        text:'',
        content:''
    },
      PhoneNumber: {
        text:'',
        content:''
    },
    genInfo: '',
  };
}

  handleChange = (e) => {
    const value = e.target.value

    this.setState({
      [e.target.name]: {
        text: value
      }
    })
  }


  genInfoSubmit = (e) => {
    const value = e.target.value
    
  e.preventDefault();
  this.setState ({

    [e.target.name]: {
      content: value
    },
    Name: {text:''},
    Email: {text:''},
    PhoneNumber: {text:''}
  });

  }

  render(){
      const {Name, Email, PhoneNumber} = this.state;
      return (
      <div>
        <div id="General">General Information
          <form onSubmit={this.genInfoSubmit}>
            <label htmlFor="taskInput">Name:</label><br/>
            <input type="text" name="Name" value={Name.text} onChange={this.handleChange}></input><br/>
            <label htmlFor="taskInput">Email:</label><br/>
            <input type="text" name="Email" value={Email.text} onChange={this.handleChange}></input><br/>
            <label htmlFor="taskInput">Phone Number:</label><br/>
            <input type="text" name="PhoneNumber" value={PhoneNumber.text} onChange={this.handleChange}></input><br/>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div id="Education">Educational Experience
          <form>
            <label htmlFor="taskInput">School Name:</label><br/>
            <input type="text" id="SchoolName" ></input><br/>
            <label htmlFor="taskInput">Title of Study:</label><br/>
            <input type="text" id="TitleOfStudy" ></input><br/>
            <label htmlFor="taskInput">Date of Study:</label><br/>
            <input type="text" id="DateofStudy" ></input><br/>
          </form>
        </div>
        <div id="Experience">Practical Experience
          <form>
            <label htmlFor="taskInput">Company Name:</label><br/>
            <input type="text" id="CompanyName" ></input><br/>
            <label htmlFor="taskInput">Position Title:</label><br/>
            <input type="text" id="PositionTitle" ></input><br/>
            <label htmlFor="taskInput">Main Tasks of Your Jobs:</label><br/>
            <input type="text" id="JobTasks" ></input><br/>
          </form>
        </div>
        <General name={Name.content} email ={Email.content} phone ={PhoneNumber.content}/>
        <div id="educationContent"></div>
        <div id="experienceContent"></div>
      </div>
      );
    }
  }

export default App;
