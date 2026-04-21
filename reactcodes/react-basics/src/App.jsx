import ClickTransfer from "./ClickTransfer";
import LiveClock from "./LiveClock";
import Greeting from "./Greeting";
import DisableButton from "./DisableButton";
import MultiForm from "./MultiForm";
import PasswordToggle from "./PasswordToggle";

function App() {
  return (
    <div>
      <h1>React App</h1>
      <ClickTransfer />
      <LiveClock />
      <Greeting />
      <DisableButton />
      <MultiForm/>
      <PasswordToggle/>
      
    </div>
  );
}
export default App;