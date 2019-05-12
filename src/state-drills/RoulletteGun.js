import React from "react";

class RouletteGun extends React.Component{

    constructor(props){

        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
            
        }
    }


    static defaultProps = {
        bulletInChamber: 8 
    }


handleTrigger = () => {

    console.log(`bulletInChamber prop is ${this.props.bulletInChamber}`);
    
    this.setState({
        spinningTheChamber: true,
    });
    
    this.timeout = setTimeout(() =>{

        let randomNumber = Math.ceil(Math.random()*8);
        this.setState({
            spinningTheChamber: false,
            chamber: randomNumber
            })
        console.log(`chamber is ${this.state.chamber}`);

    }, 2000);

    

}


displayResults = () =>{

    const {spinningTheChamber, chamber} = this.state;
    const {bulletInChamber} = this.props;

    
    if (spinningTheChamber === true){
        
        return "spinning the chamber and pulling the trigger! ..."
        }
        
        else if (chamber === bulletInChamber){

        return "BANG!!!!"

        }   else {

        return "you're safe!"
    }

    

}

componentWillUnmount(){

    clearTimeout(this.timeout);

}

render (){

    return (

        <div>
            <p>{this.displayResults()}</p>
            <button onClick={this.handleTrigger}>Pull the trigger!</button>
        </div>

    )

}

}

export default RouletteGun;

