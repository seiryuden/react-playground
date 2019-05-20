import React from "react";

class Accordion extends React.Component{

    static defaultProps = {sections: []}

    constructor(props){

        super(props)

        console.log(this.props)

        this.state = {
            currentSectionIndex: null,
            buttonsClicked: 0
        }

        console.log(this.state)

    }

   
    renderSections(){
        console.log("renderSections ran")

        console.log(this.props.sections)

        let sections = this.props.sections.map((section, index) =>(
            
            <li key={index}>
                {!this.props.length && <button onClick={() => this.handleClick(index)}>
                    {section.title}
                </button>}
                {<p>{this.renderContent(index)}</p>}
                
            </li>
            
            )

        )
            
        return sections

    }


    handleClick = (index) =>{

        console.log("handleClick ran");
        this.setState({
            currentSectionIndex: index,
            
        }
            );
        
        console.log("handleClink end")
    }


    renderContent(index){

        console.log("renderContent ran");
        console.log(index);
        if(this.state.currentSectionIndex === index){
            
            return this.props.sections[index].content;

        } else { return null}

    }

    

    render(){
        
        return(
    
            <ul>
                {this.renderSections()}
            </ul>
    
        )
    
    }

}

export default Accordion;