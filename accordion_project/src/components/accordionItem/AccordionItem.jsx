import { useState } from "react";


const AccordionItem = ({title,text,num}) => {
    const[isOpen,setIsOpen]=useState(false);
    const handelToggle = ()=> {
        setIsOpen((isOpen)=> !isOpen);
    }
    return (
        <div className={`item ${isOpen ? "open" : ""}`}onClick={handelToggle}>
            <p className="number">{num < 9 ? `0${num+1}`: num+1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-":"+"}</p>

            {isOpen && <div className="content-box">{text}</div>}
            
        </div>
    );
};

export default AccordionItem;