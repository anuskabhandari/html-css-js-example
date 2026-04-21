import { useState } from "react";

function Tabs() {
  const [tab, setTab] = useState("home");

  return (
    <div>
      <button onClick={() => setTab("home")}>Home</button>
      <button onClick={() => setTab("about")}>About</button>
      <button onClick={() => setTab("contact")}>Contact</button>

      <div style={{ marginTop: "20px" }}>
        {tab === "home" && <h3>Welcome to Home Page</h3>}
        {tab === "about" && <h3>About Us Section</h3>}
        {tab === "contact" && <h3>Contact Page</h3>}
      </div>
    </div>
  );
}

export default Tabs;