import React from "react";
import ReactDOM from "react-dom";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Accordion from "./Accordion";





describe ("Accordion Component", () => {


    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]


    it("renders without crashing", ()=>{

        const div = document.createElement("div");
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);

    })


    // INCOMPLETE!!  -  Required by assignment  


    it("renders empty <li> when given no props", ()=>{

        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it("renders no sections active by default", ()=>{

        const wrapper = sha

    })



})

