import { Component } from "react";

class Plus_Minus extends Component{

    constructor(props){
        super(props);
        this.state={
            qty:1,
        }
    }

    increase=()=>{
        this.setState(
            {
                qty:this.state.qty+1
            }
        )
    }



    decrease=()=>{
        if(this.state.qty>1){
            this.setState(
                {
                    qty:this.state.qty-1
                }
            )
        }
    }



    render(){
        return(
            <div>
                <button onClick={this.decrease}>-</button>
                <span> {this.state.qty} </span>
                <button onClick={this.increase}>+</button>
            </div>
        )
    }

}

export default Plus_Minus;