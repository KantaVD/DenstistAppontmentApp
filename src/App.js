import "./App.css"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import Calendar from "./calendar/Calendar"
import Day from "./day/Day"
import Home from "./home/Home"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import * as data from "./data/data"
import { makeAppointment} from "./actions/actions"


function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const days = [1,2,3,4,5,8,9,10,11,12,15,16,17,18,19,21,22,23,24,25];
    let appointmentDataList = data.appointments.map((appointment) => appointment.appointmentData);

    const getRandomName = (array) => {
      const person = array[Math.floor(Math.random() * array.length)];
      return `${person.name} ${person.surname}`;
    };

    for (let i = 1; i <= 150; i++) {
      const randomDentist = getRandomName(data.dentists);
      const randomAssistant = getRandomName(data.assistants)
      const randomPatient = getRandomName(data.patients)
      const randomTime = Math.floor(Math.random() * (19 - 7) + 7);
      const randomDay = days[Math.floor(Math.random() * days.length)];

      const newAppointment = {
        id: data.appointments.length + 1,
        day: randomDay,
        time: randomTime,
        patient: randomPatient,
        assistant: randomAssistant,
        dentist: randomDentist,
        appointmentData: [randomDay, randomTime, randomPatient, randomAssistant, randomDentist].join('')
      };

      if(!appointmentDataList.includes(newAppointment.appointmentData)) {
        appointmentDataList.push(newAppointment.appointmentData);
        dispatch(makeAppointment(newAppointment));
      };
    };
    //dispatch();
  })

  //   const getRandomName = (array) => {
  //     const person = array[Math.floor(Math.random() * array.length)];
  //     return `${person.name} ${person.surname}`;
  //   };
    
  //   const getRandomTime = () => {
  //     let hour;
  //     while (true) {
  //         hour = Math.floor(Math.random() * 24);
  //         if (hour > 7 && hour < 19) {
  //         return hour;
  //         }
  //     }
  //   };
  
  //   const getRandomDay = () => Math.floor(Math.random() * 28) + 1;
  
  //   const generateRandomAppointment = () => ({
  //   day: getRandomDay(),
  //   time: getRandomTime(),
  //   patient: getRandomName(patients),
  //   dentist: getRandomName(dentists),
  //   assistant: getRandomName(assistants),
  //   });
  
  //   const generateRandomAppointments = num =>
  //   Array(num)
  //       .fill(0)
  //       .map(_ => generateRandomAppointment());
  // })

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
              element={<Calendar appointments={data.appointments} />}
            />
            <Route
              path="/day"
              element={
                <Day appointments={data.appointments.filter((app) => app.day === 1)} />
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
