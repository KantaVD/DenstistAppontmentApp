import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

function Day({appointments}) {

  const appointmentsJSX = appointments.sort((a, b) => {
    return a.time - b.time
    }).map(
      ({ time, patient, dentist, assistant, id }) => (
        <AppointmentInDay
          time={time}
          patient={patient}
          dentist={dentist}
          assistant={assistant}
          key={id}
        />
      )
    )
  return (
  <ul className="dayview">
    {appointmentsJSX}
  </ul>
)
}
export default Day