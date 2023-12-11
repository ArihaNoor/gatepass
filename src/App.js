import AddData from "./views/AddData";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import { Route, Routes } from 'react-router-dom';

//App.js 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AddData" element={<AddData />} />
      </Routes>
    </>
  );
}

export default App;
