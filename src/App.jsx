import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CategoryDetail } from "./routes/CategoryDetail";
import {ProductDetail} from "./routes/ProductDetail";
import { Home } from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria" element={<CategoryDetail/>}/>
        <Route path="/producto/:id" element={<ProductDetail/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
