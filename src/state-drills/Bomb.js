import React from "react";

class Bomb extends React.Component{

constructor(props){

    super(props)
    this.state = {
        count: 0,
        text: "tick"
        }

}


bombTicker = () =>{
    this.setState({
        count: this.state.count + 1
        
    })

    console.log(this.state.count)

    if(this.state.count % 2 !== 0){
        this.setState({
            text: "tock"
        })
        } else{
            this.setState({ 
            text: "tick"

            })
        }

    if(this.state.count === 8){
        
        clearInterval(this.interval)
        this.setState({
            text: "BOOM!"
        })
    }
    }


componentDidMount(){
    this.interval = setInterval(() => {this.bombTicker()  
    }, 1000)

}

componentWillUnmount(){
    clearInterval(this.interval)
}




render (){

    return(
        <div>

            <p>
                {this.state.text}

            </p>

        </div>
    )

}
}

export default Bomb;