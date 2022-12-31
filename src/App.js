import "./App.css"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import Calendar from "./calendar/Calendar"
import Day from "./day/Day"
import Home from "./home/Home"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as data from "./data/data"
import { removeAppointment, makeAppointment, setId} from "./actions/actions"

function App() {
  const dispatch = useDispatch()
  const dentists = useSelector(state => state.dentists);
  const assistants = useSelector(state => state.assistants);
  const patients = useSelector(state => state.patients);
  const appointments = useSelector(state => state.appointments);
  let idState = useSelector(state => state.idState);
  
  useEffect(() => {


    const days = [1,2,3,4,5,8,9,10,11,12,15,16,17,18,19,21,22,23,24,25];
    let appointmentDataList = data.appointments.map((appointment) => appointment.appointmentData);

    const getRandomName = (array) => {
      const person = array[Math.floor(Math.random() * array.length)];
      return `${person.name} ${person.surname}`;
    };

    for (let i = 1; i <= 150; i++) {
      const randomDentist = getRandomName(dentists);
      const randomAssistant = getRandomName(assistants)
      const randomPatient = getRandomName(patients)
      const randomTime = Math.floor(Math.random() * (19 - 7) + 7);
      const randomDay = days[Math.floor(Math.random() * days.length)];

      const newAppointment = {
        id: idState,
        day: randomDay,
        time: randomTime,
        patient: randomPatient,
        assistant: randomAssistant,
        dentist: randomDentist,
        appointmentData: [randomDay, randomTime, randomPatient, randomAssistant, randomDentist].join('')
      };

      if(!appointmentDataList.includes(newAppointment.appointmentData)) {
        idState++
        appointmentDataList.push(newAppointment.appointmentData);
        dispatch(makeAppointment(newAppointment));
      }
    }
    dispatch(setId(idState))
  },[])

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
              element={
                <Calendar />}
            />
            <Route
              path="/day"
              element={
                <Day appointments={appointments.filter(appointment => appointment.day === 1)} />
              }
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;
