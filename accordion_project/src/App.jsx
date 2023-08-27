import Accordion from "./components/accordion/Accordion";
import datas from "./data/data.js"


const App = () => {
  return (
    <div>
        <Accordion data={datas}/>
    </div>
  );
};

export default App;