import GoalInput from './Components/GoalInput';
import GoalList from './Components/GoalList';
import GoalEmpty from './Components/GoalEmpty';
import './App.css';
import { useState } from 'react';
import React from 'react';
let delete_forward=false;
let delete_id;
function App() {
  let [goal_list,set_goal_list]=useState([{goal_name:"Walk",id:1,isCompleted:false},{goal_name:"Eat",id:2,isCompleted:false}]);
  function addGoalHandler(data)
  {
    let new_goal={goal_name:data,id:Math.random(),isCompleted:false}
     set_goal_list((prev)=>{
      return [...prev,new_goal]
     })
  }
  function deleteGoalForward(id)
  {
      
      // set_goal_list((prev)=>{
      //  const updated= prev.filter((item)=>{
      //     return item.id!==id;
      //   })
      //   return updated;
      // })
      delete_id=id;
      delete_forward=true;
      set_goal_list((prev)=>{
         return [...prev];
       })
      console.log(delete_forward)
      console.log(goal_list)
  }

  function deleteRes(data)
  {
      if(data===true)
      {
          set_goal_list((prev)=>{
       const updated= prev.filter((item)=>{
          return item.id!==delete_id;
        })
        return updated;
      })
      delete_forward=false;
      }
      else{
        set_goal_list((prev)=>{
          return [...prev];
        })
        delete_forward=false;
      }
  }

  function change_isCompleted(id,status)
  {
    set_goal_list((prev)=>{
      let updated;
      updated=prev.map((item)=>{
        if(item.id==id)
        {
          item.isCompleted=!(status)
        }
        return item;
      })
      return updated;
    })
  }
  console.log(goal_list);
  let content;
  if(goal_list.length>0)
  {
    content=(<GoalList items={goal_list} delete={deleteGoalForward} changeStatusComplete={change_isCompleted}></GoalList>)
  }
  else{
    content=(<p>No Goals Found.Wanna Add One ?</p>)
  }
  
    return (
      <React.Fragment>
        <GoalInput addGoal={addGoalHandler}></GoalInput>
        <div className='list'>
          {content}
        </div>
        {(delete_forward===true) && <GoalEmpty message="Are you sure, you want to delete ?" btn1="Delete" btn2="Cancel" deleteResponse={deleteRes} cancelResponse={deleteRes} ></GoalEmpty>}
      </React.Fragment>
    );
  
  
}

export default App;
