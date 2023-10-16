import "./App.css";

import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Parches from "./pages/Parches";
import Details from "./pages/Details";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="parches" element={<Parches />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
