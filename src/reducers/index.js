import { combineReducers } from "redux"
import dentistReducer from './dentistReducer'
import assistantReducer from './assistantReducer';
import patientReducer from './patientReducer';
import appointmentReducer from './appointmentReducer';
import incrementIdReducer from "./idStateReducer";

const allReducers = combineReducers({
    dentists : dentistReducer,
    assistants: assistantReducer,
    patients: patientReducer,
    appointments: appointmentReducer,
    idState: incrementIdReducer
})

export default allReducers