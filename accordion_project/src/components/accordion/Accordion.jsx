import AccordionItem from "../accordionItem/AccordionItem";


const Accordion = ({data}) => {
    return (
        <div className="accordion">
            {data.map((el,i)=>(
                <AccordionItem title={el.title} text={el.text} num={i} key={el.id}/>
            ))}
            
        </div>
    );
};

export default Accordion;