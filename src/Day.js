import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

export default ({ appointments }) => {
  const sortedAppointments = appointments.sort(function (a,b) {
    return a.time - b.time
  })

  const appointmentsJSX = sortedAppointments.map(
    ({ time, patient, dentist, assistant }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        key={index}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};
