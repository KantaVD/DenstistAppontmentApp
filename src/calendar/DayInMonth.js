import AppointmentInMonth from "./AppointmentInMonth"

function DayInMonth(props) {
  console.log("dayinmonthfunctie")
  console.log({props})
  const appointmentsJSX = props.appointments.sort((a,b) => {
    return a.time - b.time
  }).map(({ time, patient }, index) => (
    <AppointmentInMonth 
      time={time} 
      patient={patient} 
      key={index} />
  ));

  return <div className="day">{appointmentsJSX}</div>;
};

export default DayInMonth
