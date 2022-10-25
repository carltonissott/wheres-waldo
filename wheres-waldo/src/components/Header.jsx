import Timer from "./Timer"

const Header = (props)=>{


    const started = props.started
    return(
        <div className="header">
            <Timer started={started} finished={props.finished} currentPlayer={props.currentPlayer}/>
        </div>
    )
}

export default Header