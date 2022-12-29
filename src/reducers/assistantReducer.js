import * as actions from "../actions/actiontypes"
import { assistants } from "../data/data"

const assistantReducer = (state = assistants, action) => {
    switch(action.type) {
        case actions.ADD_ASSISTANT:
            return [ 
                ...state,
                {
                    id: state.length,
                    name: action.payload.assistant.name,
                    surname: action.payload.assistant.name,
                    phonenumber: action.payload.assistant.phonenumber,
                    email: action.payload.assistant.name + "@dentistcompanybvt.com",
                    isSick: false
                }
            ]
        case actions.SICK_ASSISTANT:
            return state.map(assistant => assistant.id === action.payload.id ?
                {...assistant, isSick: true} : assistant)
        default:
            return state
    }
}

export default assistantReducer