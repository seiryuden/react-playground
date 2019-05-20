import React from "react";
import "./Tabs.css"


class Tabs extends React.Component{

  static defaultProps = { tabs:[]};

  
  renderButtons() {
      return this.props.tabs.map((tab, index) => (
        <button key={index} onClick={() => this.handleButtonClick(index)}>
          {tab.name}
        </button>
      ))
    }

    
  handleButtonClick(index){

    this.setState({currentTabIndex: index})
    console.log("button clicked!",{index})

  }

  state = {
      currentTabIndex: 0
    };

  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex]
    return (
      <div className='content'>
        {currentTab.content}
      </div>
    )
  }
    
    render() {
      return (
        <div>
          {this.renderButtons()}
          {!!this.props.tabs.length && this.renderContent()}
        </div>
      )
    }

}

export default Tabs;