function AppointmentInDay({time, patient, dentist, assistant, id}) {
  const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

  return (
    <li key = {id} className={dentist.isSick? "reschedule-appointment": "appointment"}>
      <div className="time">{format_time(time)}</div>
      <div className="patient">Patient: {patient.name} {patient.surName}</div>
      <div className="dentist">Tandarts: {dentist.name} {dentist.surName}</div>
      <div className="assistant">Assistent: {assistant.name} {assistant.surName}</div>
    </li>
  )
}

export default AppointmentInDay