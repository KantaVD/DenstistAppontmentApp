import { combineReducers } from "redux"
import dentistReducer from './dentistReducer'
import assistantReducer from './assistantReducer';
import patientReducer from './patientReducer';
import appointmentReducer from './appointmentReducer';

const allReducers = combineReducers({
    dentist : dentistReducer,
    assistant: assistantReducer,
    patient: patientReducer,
    appointment: appointmentReducer
})

export default allReducers