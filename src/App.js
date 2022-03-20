import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CoreTeam from "./pages/CoreTeam";
import Contact from "./pages/Contact";
import Rules from "./pages/Rules";
import Developers from "./pages/Developers";
import Message from "./pages/Message";
import Clubs from "./pages/Clubs";
import ClubEvents from "./pages/ClubEvents";
import Gallery from "./pages/Gallery";
import Abhiruchi from "./pages/Abhiruchi";
import ItechEvents from "./components/ItechEvents";
import StrideEvents from "./components/StrideEvents";
import RIEvents from "./components/RIEvents";
import ImagesEvents from "./components/ImagesEvents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Clubs />} />
          <Route path="/msg" element={<Message />} />
          <Route path="/team" element={<CoreTeam />} />
          <Route path="/abhiruchi" element={<Abhiruchi />} />
          <Route path="/event" element={<ClubEvents />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/dev" element={<Developers />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/itechevents" element={<ItechEvents/>} />
          <Route path="/strideevents" element={<StrideEvents/>} />
          <Route path="/rievents" element={<RIEvents/>} />
          <Route path="/imagesevents" element={<ImagesEvents/>} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
