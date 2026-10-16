import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import ComparisionMap from "./pages/ComparisionMap/ComparisionMap";
import Contact from "./pages/Contact/Contact";
import DataAnalytics from "./pages/DataAnalytics/DataAnalytics";
import DataStories from "./pages/DataStories/DataStories";
import HomeTwo from "./pages/HomeTwo/HomeTwo";
import InteractiveMap from "./pages/InteractiveMap/InteractiveMap";
import InteractiveMapZipcode from "./pages/InteractiveMap/InteractiveMapZipcode";
import Story from "./pages/Story/Story";
import Team from "./pages/Team/Team";

// Route inventory copied from deepsolar-1's App.js (Firebase analytics
// removed — add your own project's config if you want analytics).
function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomeTwo />} />
          <Route path="/home" element={<HomeTwo />} />
          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/data" element={<DataStories />} />

          <Route path="/interactiveMap" element={<InteractiveMap />} />
          <Route path="/interactiveMapZipcode" element={<InteractiveMapZipcode />} />

          <Route path="/comparisonMap" element={<ComparisionMap />} />
          <Route path="/story" element={<Story />} />
          <Route path="/dataAnalytics" element={<DataAnalytics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
