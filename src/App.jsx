import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Conferences from "./pages/Conferences";
import Opportunities from "./pages/Opportunities";
import Resources from "./pages/Resources";
import Officers from "./pages/Officers";
import Newsletter from "./pages/Newsletter";
import GetInvolved from "./pages/GetInvolved";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/conferences" element={<Conferences />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/officers" element={<Officers />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/get-involved" element={<GetInvolved />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;