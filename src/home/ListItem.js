import { useDispatch } from "react-redux"
import { SICK_ASSISTANT, SICK_DENTIST } from "../actions/actiontypes"

function ListItem( staffmember, {id, name, surname,staffGroup}) {
    const dispatch = useDispatch()

    return(
        <tr key = {id} className="list-item" >
            <td className="id-list"> { id } </td>
            <td className="name-list"> {name} {surname}</td>
            <td>
                <button /*{ staffmember.isSick ? className="is-sick" : className="make-sick"}*/
                    onClick={staffGroup === "dentist" ?
                    (() => dispatch(SICK_DENTIST(id))) 
                    : (() => dispatch(SICK_ASSISTANT(id)))
                }
                > 
                Is Sick 
                </button>
            </td>
        </tr>
        
    )
}

export default ListItem