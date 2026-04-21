import ClickTransfer from "./ClickTransfer";
import LiveClock from "./LiveClock";
import Greeting from "./Greeting";
import DisableButton from "./DisableButton";
import MultiForm from "./MultiForm";
import PasswordToggle from "./PasswordToggle";
import Tabs from "./Tabs";
import FetchUsers from "./FetchUsers";
import CheckBoxList from "./CheckBoxList";
import Countdown from "./Countdown";

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
      <Tabs/>
      <FetchUsers/>
      <CheckBoxList/>
      <Countdown/>
      
    </div>
  );
}
export default App;