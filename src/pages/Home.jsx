import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">LandingPage</Link>
        </li>
        <li>
          <Link to="/createeventpage">CreateEventPage</Link>
        </li>
        <li>
          <Link to="/explorepage">ExplorePage</Link>
        </li>
        <li>
          <Link to="/explorepageeventtwo">ExplorePageEventTwo</Link>
        </li>
        <li>
          <Link to="/landingpagecreateoption">LandingPageCreateOption</Link>
        </li>
        <li>
          <Link to="/createeventpagecreateoption">
            CreateEventPageCreateOption
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
