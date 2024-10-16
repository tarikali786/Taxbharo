import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Component";
import Layout1 from "./Layout/Layout1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
