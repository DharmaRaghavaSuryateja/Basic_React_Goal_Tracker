import './Card.css'
const Card=(props)=>{
    return <div className={`card ${props.className}`} onClick={(e)=>{e.stopPropagation();}}>
           {props.children}
    </div>
}
export default Card;