import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import HomePageLayout from "./components/HomePage/HomePageLayout";

function App() {
  return (
    <>
      <Header
        Home="Home"
        AboutUs="AboutUs"
        OurTeam="OurTeam"
        ContactUs="ContactUs"
      />

      <Router>
        <Routes>
          <Route path="/" element={<HomePageLayout />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
