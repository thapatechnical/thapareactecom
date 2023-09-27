import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import { AnalyticsBrowser } from "@segment/analytics-next";
const analytics = AnalyticsBrowser.load({ writeKey: "l9phqG3NMhlxAP5YVRt0PV0i760n19qa" });

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "CDP Ecommerce",
  };
  analytics.page("Page Viewed About");

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
