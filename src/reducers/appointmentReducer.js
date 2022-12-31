import * as actions from "../actions/actiontypes"
import { appointments } from "../data/data"

const appointmentReducer = (state = appointments, action) => {
    switch (action.type) {
        case actions.MAKE_APPOINTMENT :
            return [...state, action.payload ]
        case actions.MOVE_APPOINTMENT:
            return state.map(appointment => appointment.id !== action.payload.id ?
                appointment: {...appointment, day: action.payload.newday, time: action.payload.newtime})
        case actions.REMOVE_APPOINTMENT : 
            return state.filter(appointment => appointment.id !==action.payload)
        default :
            return state
    }
}

export default appointmentReducer