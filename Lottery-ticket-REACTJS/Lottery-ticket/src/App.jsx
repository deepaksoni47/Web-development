
import Lottery from './Lottery';
import "./App.css";
import {sum} from "./helper";
import TicketNum from './TicketNum';

function App() {
  
  let winCondition = (ticket) => {
    return sum(ticket) ===15 ;
  }
  return (
    <>
    <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
