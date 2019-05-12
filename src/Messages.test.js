import React from "react";
import ReactDOM from "react-dom";
import Messages from "./Messages";
import renderer from "react-test-renderer";


describe("Messages component", () => {

it("renders the component", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Messages/>, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('should render with the props provided', () => {
    let props = {
        name: "Asdf",
        unread: 1
    }

    expect(Messages(props)).toEqual(
        <div className="messages">
            {props.name}
            <div className="unread_count badge">{props.unread}</div>
        </div>
    )
  });


  it("renders the UI as expected", ()=> {
    const tree = renderer
        .create(<Messages name="Messages" unread={4}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });


  it("renders the UI as expected with 0 unread notifications", ()=>{
      const tree2 = renderer
        .create(<Messages name="Messages" unread={0}/>)
        .toJSON();
    expect(tree2).toMatchSnapshot();
  })

});