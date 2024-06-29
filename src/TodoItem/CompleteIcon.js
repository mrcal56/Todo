import { BiRadioCircleMarked } from "react-icons/bi";
function CompleteIcon(props){
    return(
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}><BiRadioCircleMarked size={45}/></span>
    )
}


export {CompleteIcon};