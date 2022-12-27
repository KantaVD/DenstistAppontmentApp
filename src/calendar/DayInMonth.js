import React from "react";
import AppointmentInMonth from "./AppointmentInMonth"

function DayInMonth({ appointments }) {
  const appointmentsJSX = appointments.map(({ time, patient }, index) => (
    <AppointmentInMonth time={time} patient={patient} key={index} />
  ));

  return <div className="day">{appointmentsJSX}</div>;
};

export default DayInMonth
