import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./ui/Footer";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
      {/*  <Route path='/movies/:movieId' element={<Movie />} /> */}
       </Routes>    
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
