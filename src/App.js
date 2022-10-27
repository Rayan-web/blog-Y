import BlogPost from "./component/blogPost";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import CreatePost from "./component/CreatePost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Register from "./component/register";
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <section className="font-Montserrat">
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="create" element={<CreatePost />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </section>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
