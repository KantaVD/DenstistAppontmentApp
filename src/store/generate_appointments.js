import * as data from "./data"

const getRandomName = (array) => {
    const person = array[Math.floor(Math.random() * array.length)];
    return `${person.name} ${person.surname}`;
};
  
const getRandomTime = () => {
let hour;
while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
    return hour;
    }
}
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
day: getRandomDay(),
time: getRandomTime(),
patient: getRandomName(data.patients),
dentist: getRandomName(data.dentists),
assistant: getRandomName(data.assistants),
});

const generateRandomAppointments = num =>
Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());
  
export default generateRandomAppointments;

  