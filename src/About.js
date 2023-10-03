import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import { AnalyticsBrowser } from "@segment/analytics-next";
const writeKey = process.env.WRITE_KEY;
console.log("Write key ", writeKey);
const analytics = AnalyticsBrowser.load({ writeKey: "trt2mhv6rjiqM8rpsRExWM1pBiguWqUm" });

const About = () => {
  analytics.page("Page Viewed About");
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
