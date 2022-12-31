const AppointmentInMonth = ({time, patient}) => {
  console.log("appointementinmonthfunctie")

    const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);
    return (
        <div className="appointment">
            <span className="time">{format_time(time)}</span> 
            <span className="patient">{patient}</span>
        </div>
    );
};

export default AppointmentInMonth;