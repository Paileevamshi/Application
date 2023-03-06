import React,{Component} from 'react'

class Timer extends Component(){
    interval
    constructor(props){
        super(props)

        this.state={
            timer:0
        }
    }
    componentDidMount(){
        this.interval=setInterval(() =>{
            this.setState(prevstate =>({
                timer:prevstate.timer+1
            }))
        },1000)
    }
    componentUnMount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                count-{this.state.timer}
            </div>
            )
    }
}


export default Timer