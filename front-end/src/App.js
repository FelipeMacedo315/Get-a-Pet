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
import Home from "./components/home";
import ViewPet from "./components/viewPet";

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
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/update/info/user" element={<UpdateUserInfo />} />
              <Route path="/MyPets" element={<MyPets />} />
              <Route path="/add/pet" element={<AddPet />} />
              <Route path="/edit/pet/:id" element={<EditPet />} />
              <Route path="/pet/view/:id" element={<ViewPet />} />
            </Routes>
          </Container>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

