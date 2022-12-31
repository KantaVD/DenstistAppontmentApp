import * as actions from "../actions/actiontypes"
import { dentists } from "../data/data"

const dentistReducer = (state = dentists, action) => {
    switch(action.type) {
        case actions.ADD_DENTIST:
            return [ 
                ...state,
                {
                    id: state.length,
                    name: action.payload.dentist.name,
                    surname: action.payload.dentist.name,
                    phonenumber: action.payload.dentist.phonenumber,
                    email: action.payload.dentist.name + "@dentistcompanybvt.com",
                    isSick: false
                }
            ]
        case actions.SICK_DENTIST:
            return state.map(
                dentist => dentist.id === action.payload.id ?
                {...dentist, isSick: true} : dentist)
            
        default:
            return state
    }
}

export default dentistReducer