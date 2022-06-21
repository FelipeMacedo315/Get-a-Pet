import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Register from "./components/Register";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Container from "./components/container";
import Login from "./components/login";
import UserContext from "./components/ContextUser";
import { useState } from "react";

function App() {
  const [dataRegister, setDataRegister] = useState({
    nome:null,
    email:null,
    senha:null
  });
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ dataRegister, setDataRegister }}>
          <Header />
          <Container>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Container>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
