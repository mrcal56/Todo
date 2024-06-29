import { IoCloseCircle } from "react-icons/io5";

function DeleteIcon(props){
    return(
    <span className="Icon Icon-delete" onClick={props.onDelete}><IoCloseCircle size={40}/></span>
    )

}

export {DeleteIcon};