import './GoalList.css'
import GoalItem from './GoalItem'
import Wrapper from './Helpers/Wrapper'
const GoalList=(props)=>{
     console.log(props.items)
    let content=((props.items).map((item)=>(
        <GoalItem item={item.goal_name} key={item.id} id={item.id} isCompleted={item.isCompleted} deletey={props.delete} change={props.changeStatusComplete}></GoalItem>
     )));
    return (
       <Wrapper>{content}</Wrapper>
    )
}
export default GoalList;