import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Register from "./components/Register";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Container from "./components/container";
import Login from "./components/login";
import UserContext from "./components/ContextUser";
import { useState } from "react";
import UpdateUserInfo from "./components/updateUser";
import MyPets from "./components/myPets";
import AddPet from "./components/addPet";
import EditPet from "./components/editPet";

function App() {
  const [dataRegister, setDataRegister] = useState({});
  const [session, setSession] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ dataRegister, setDataRegister, session, setSession }}>
          <Header />
          <Container>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/update/info/user" element={<UpdateUserInfo />} />
              <Route path="/MyPets" element={<MyPets />} />
              <Route path="/add/pet" element={<AddPet />} />
              <Route path="/update/pet/:id" element={<EditPet />} />
            </Routes>
          </Container>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

