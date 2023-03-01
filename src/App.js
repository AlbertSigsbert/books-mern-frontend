import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main className="max-w-7xl mx-auto">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
