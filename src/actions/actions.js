import { act } from "react-dom/test-utils"
import * as actions from "./actiontypes"

export const addDentist = (dentist) => {
    return {
        type: actions.ADD_DENTIST,
        payload: dentist
    }
}

export const addAssistant = (assistant) => {
    return {
        type: actions.ADD_ASSISTANT,
        payload: assistant
    }
}

export const addPatient = (patient) => {
    return {
        type: actions.ADD_PATIENT,
        payload: patient
    }
}

export const sickDentist = (id) => {
    return {
        type: actions.SICK_DENTIST,
        payload: id
    }
}

export const sickAssistant = (id) => {
    return {
        type: actions.SICK_ASSISTANT,
        payload: id
    }
}

export const sickPatient = (id) => {
    return {
        type: actions.SICK_PATIENT,
        payload: id
    }
}

export const makeAppointment = (daynumber, time, patientId, dentistid, assistantid ) => {
    return {
        type: actions.MAKE_APPOINTMENT,
        payload: {
            daynumber,
            time,
            patientId,
            dentistid,
            assistantid
        }
    }
}
export const removeAppointment = (id) => {
    return {
        type: actions.REMOVE_APPOINTMENT,
        payload: id
    }
}
export const moveAppointment = (id, newDay ,newTime) => {
    return {
        type: actions.MOVE_APPOINTMENT,
        payload: {
            id,
            newDay,
            newTime
        }
    }
}

export const setId = (number) => {
    return {
        type: actions.SET_ID_STATE,
        payload: number
    }
}