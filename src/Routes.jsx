import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const CreateEventPageCreateOption = React.lazy(
  () => import("pages/CreateEventPageCreateOption"),
);
const LandingPageCreateOption = React.lazy(
  () => import("pages/LandingPageCreateOption"),
);
const ExplorePageEventTwo = React.lazy(
  () => import("pages/ExplorePageEventTwo"),
);
const ExplorePage = React.lazy(() => import("pages/ExplorePage"));
const CreateEventPage = React.lazy(() => import("pages/CreateEventPage"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/createeventpage" element={<CreateEventPage />} />
          <Route path="/explorepage" element={<ExplorePage />} />
          <Route
            path="/explorepageeventtwo"
            element={<ExplorePageEventTwo />}
          />
          <Route
            path="/landingpagecreateoption"
            element={<LandingPageCreateOption />}
          />
          <Route
            path="/createeventpagecreateoption"
            element={<CreateEventPageCreateOption />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
