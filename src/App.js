import React, { Component } from "react"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import "./App.css"

import Calendar from "./Calendar"
import Day from "./Day"
import Home from "./Home"
import * as data from "./data"
import generateRandomAppointments from "./utils";


class App extends Component {
  constructor() {
      super();
      this.state = {
        dentists : data.dentists,
        assistants: data.assistants,
        patients: data.patients,
        appointments : generateRandomAppointments(150)
      }
  }

  render() { 
      return ( 
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/calendar">Calendar view</Link>
                </li>
                <li>
                  <Link to="/day">Day view</Link>
                </li>
              </ul>
            </nav>
            <main>
              <Routes>
                <Route
                  path="/calendar"
                  element={<Calendar appointments={this.state.appointments} />}
                />
                <Route
                  path="/day"
                  element={
                    <Day appointments={this.state.appointments.filter((app) => app.day === 1)} />
                  }
                />
                <Route path="/" element={<Home state = {this.state}/>} />
              </Routes>
            </main>
          </div>
        </Router>
      )
  }
}

export default App;
