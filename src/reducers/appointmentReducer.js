import * as actions from "../actions/actiontypes"
import { appointments } from "../data/data"

const appointmentReducer = (state = appointments, action) => {
    switch (action.type) {
        case actions.MAKE_APPOINTMENT :
            return [...state, action.payload ]
        case actions.REMOVE_APPOINTMENT : 
            return state.filter(appointment => appointment.id !==action.payload.id)
        default :
            return state
    }
}

export default appointmentReducer