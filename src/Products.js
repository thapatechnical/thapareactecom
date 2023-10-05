import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { useAuth0 } from "@auth0/auth0-react";
import { useFilterContext } from "./context/filter_context";
import { AnalyticsBrowser } from "@segment/analytics-next";
const writeKey = process.env.WRITE_KEY;
const analytics = AnalyticsBrowser.load({ writeKey: "trt2mhv6rjiqM8rpsRExWM1pBiguWqUm" });
const Products = () => {
  const { isAuthenticated, user } = useAuth0();
  analytics.page("Page Viewed Products");
  let properties = {
    attributes: {
      type: "Products"
    }
  };
  if(isAuthenticated)
  {
    properties.attributes.email = user.email;
  }
  analytics.track("Element Clicked", properties);
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
