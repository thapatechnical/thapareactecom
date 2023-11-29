import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import { AnalyticsBrowser } from "@segment/analytics-next";
import { useAuth0 } from "@auth0/auth0-react";
const writeKey = process.env.WRITE_KEY;
console.log("Write key ", writeKey);
const analytics = AnalyticsBrowser.load({ writeKey: "trt2mhv6rjiqM8rpsRExWM1pBiguWqUm" });
analytics.debug(true);
const About = () => {
  const { isAuthenticated, user } = useAuth0();
  analytics.page("Page Viewed About");
  let properties = {
    attributes: {
      type: "About"
    }
  };
  if(isAuthenticated)
  {
    properties.attributes.email = user.email;
  }
  analytics.track("Element Clicked", properties);
  const { myName } = useProductContext();

  const data = {
    name: "CDP Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
