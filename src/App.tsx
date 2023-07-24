import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./Form/Form";
import SecondPage from "./SecondPage/SecondPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/SecondPage" element={<SecondPage/>} />
      </Routes>
    </>
  );
}

export default App;
