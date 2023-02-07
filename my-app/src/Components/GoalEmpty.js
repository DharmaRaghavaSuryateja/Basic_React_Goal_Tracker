import style from './GoalEmpty.module.css'
import Card from '../Components/UI/Card'
import React from 'react'
import  ReactDOM from 'react-dom'
const GoalEmpty=(props)=>{

    const Backdrop=(props)=>{
        return(
            <div className={style.backdrop} onClick={()=>{if(props.cancelResponse){props.cancelResponse(false)} else {props.set(true)}}}></div>
        )
    }
     const Overlay=(props)=>{
          return(
            <Card className={style.Root}>
            <div className={style.title}>
            {/* Are you sure, you want to delete ? */}
            {props.message}
            </div>
            <div className={style.buttons}>
             <button className={style.delete} onClick={(e)=>{if(props.deleteResponse){props.deleteResponse(true);} else{props.set(true)}} }>{props.btn1}</button>
             <button className={style.cancel} onClick={()=>{if(props.cancelResponse){props.cancelResponse(false);} else{props.set(true)}}}>{props.btn2}</button>
             </div>
         </Card>
          )
     }
    return(
        <React.Fragment>
            {/* while creating poratls using ReactDOM.createPortal,simply pass the props like... prop_name={props.prop_name} and note do not write any on onClick events on portal syntax(eg:<Backdrop>) */}
         {ReactDOM.createPortal(<Backdrop cancelResponse={props.cancelResponse} set={props.set}/>,document.getElementById("backdrop"))}
         {ReactDOM.createPortal(<Overlay message={props.message} btn1={props.btn1} btn2={props.btn2} cancelResponse={props.cancelResponse} deleteResponse={props.deleteResponse} set={props.set}/>,document.getElementById("overlay"))}
       
     </React.Fragment>
     
    )
}
export default GoalEmpty;