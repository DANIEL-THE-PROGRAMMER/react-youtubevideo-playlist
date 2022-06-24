

import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home count={45} />
      <Contact contact="123345556" />
    </div>
  );
}


export default App;
