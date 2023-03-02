import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
