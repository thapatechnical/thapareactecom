import FeatureProduct from "./components/FeatureProduct";
import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import { AnalyticsBrowser } from "@segment/analytics-next";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const analytics = AnalyticsBrowser.load({ writeKey: "l9phqG3NMhlxAP5YVRt0PV0i760n19qa" });
const Home = () => {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    // Check if the user is authenticated
    let isPresent = false;
    let user_id = localStorage.getItem("ajs_user_id");

    // Check if ajs_user_id is present and not null
    if (user_id && user_id !== "null") {
      isPresent = true;
    } else {
      // Generate a new UUID
      user_id = uuidv4();
    }
    if (isAuthenticated && !(isPresent)) {
      // Send an identify call to Segment
      console.log("User present in Segment ", isPresent);
      analytics.identify(user_id, {
        email: user.name,
      });
    }
  }, [isAuthenticated, user]);
  const data = {
    name: "CDP store",
  };
  analytics.page("Page Viewed Home");
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
