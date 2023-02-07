import style from './GoalInput.module.css'
import GoalEmpty from './GoalEmpty';
import {useRef, useState} from 'react';
const GoalInput=(props)=>{

    let [validInput,setValidInput]=useState(true);
    let inputValueRef=useRef("");
    let inputValue=inputValueRef.current.value;
    function valueMonitor()
    {
        inputValue=inputValueRef.current.value;
        console.log(inputValueRef)
         if(inputValue.trim().length>0)
         {
            setValidInput(true);
         }
    }

    function sendValue()
    {
        inputValue=inputValueRef.current.value;
        if(inputValue.trim().length!==0)
        {
            props.addGoal(inputValue);
        }
        else{
            setValidInput(false);
        }
        inputValueRef.current.value="";
     
    }

    function ErrorModal(data)
    {
        setValidInput(data);
    }

    return (
        <div className={style.Root}>
            {!validInput && <GoalEmpty message="Hey, Please Add Some Goal !!!" btn1="Cancel" btn2="Sure" set={ErrorModal}/>}
        <div className={style.Input_form}>
            <h2 className={style.Input_form_title} style={{color: !validInput ? "red" : "black"}}>Course Goal</h2>
           <input type="text" className={`${style['Input_form_textArea']} ${!validInput ? style.invalid : ''}`} placeholder="What Needs to be Done???" ref={inputValueRef}  onChange={valueMonitor}/>
           <button className={style.Input_form_button} onClick={sendValue}>Add Goal</button>
        </div>
        </div>
    )
}
export default GoalInput;