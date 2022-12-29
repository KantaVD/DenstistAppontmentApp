import { useDispatch } from "react-redux"

function ListItem({Id, name, surname,}) {
    const dispatch = useDispatch()
    return(
        <tr key = {Id} className="list-item" >
            <td> {name} {surname}</td>
            <td><button name="sick" onClick={() => dispatch({Id})}> Is Sick </button></td>
        </tr>
        
    )
}

export default ListItem