import * as actions from "../actions/actiontypes"
import { patients } from "../data/data"

const patientReducer = (state = patients, action) => {
    switch(action.type) {
        case actions.ADD_PATIENT:
            return [ 
                ...state,
                {
                    id: state.length,
                    name: action.payload.patient.name,
                    surname: action.payload.patient.name,
                    phonenumber: action.payload.patient.phonenumber,
                    email: action.payload.patient.name + "@dentistcompanybvt.com",
                    isSick: false
                }
            ]
        case actions.SICK_PATIENT:
            return state.map(patient => patient.id === action.payload.id ?
                {...patient, isSick: true} : patient)
        default:
            return state
    }
}

export default patientReducer