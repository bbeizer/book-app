import './App.css';
import './components/style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar"
import Home from "./routes/Home"
import Messages from "./routes/Messages"
import Profile from "./routes/Profile"
import SavedLibrary from "./routes/SavedLibrary"
import Search from "./routes/Search"
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/home' exact element={<Home />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/savedlibrary' element={<SavedLibrary />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;