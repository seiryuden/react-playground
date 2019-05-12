import React from "react";

class HelloWorld extends React.Component {

    constructor(){

        super()
        this.state = { who: "World"}

    }

    handleClick = (name)=> {

       this.setState({who: name})

    }

    render(){

        return (
        <div>
            <p>Hello {this.state.who}</p>
            <button onClick={() => this.handleClick("World")}>World</button>
            <button onClick={() => this.handleClick("Friends")}>Friends</button>
            <button onClick={() => this.handleClick("React")}>React</button>
        </div>

        )
    }

}

export default HelloWorld;