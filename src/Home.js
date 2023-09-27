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
const segmentAccessToken = 'cDaGJK8zhWCdmL3vmk8HazaP8b2WGXJLIXiV00IsbD7HhdtZQwmDEFY_x39wSIRLd-X72V1NPkyiQKxOSz6n5EC97gSWMdcazmUO1pBRoVmQ7vwcrc_VVk-QDZt2wrzRY3NSEbbqjRU010u6iX5GSi2cWEiLKBpQXIeg8oZDqdG9h4eB6kOFVYM11KKd1jD3ZQoDwmbWy-Q9LeypmOHhYIM9dLSK9XgQ-bPqX-TjE8LjX9Puf6B44iTG2LTni3BlFdwEiIQUNPPJUTSNZj0Jz16QuffrqUcjJQ=='
const segmentSpaceId = 'spa_1mPTocQe7TtlwER38IpyIxtcmC4';
const onPageEvent = () => {
  analytics.page("Page Viewed Home");
  console.log("[onPageEvent]");
};

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
  onPageEvent();
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
