import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import {GlobalStyle} from "./GlobalStyle";
import {ThemeProvider} from "styled-components";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24, 24, 29)",
      text: "rgba(29, 29, 29, .8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.02), rgba(27, 31, 35, 0.15)",
      shadowSupport: "rgba(0,0,0,0.16)",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Router>
                    <GlobalStyle/>
                    <Routes>
                        <Route path="/"
                            element={<Home/>}/>
                        <Route path="/about"
                            element={<About/>}/>
                        <Route path="/products"
                            element={<Products/>}/>
                        <Route path="/contact"
                            element={<Contact/>}/>
                        <Route path="/singleproduct/:id"
                            element={<SingleProduct/>}/>
                        <Route path="/cart"
                            element={<Cart/>}/>
                        <Route path="*"
                            element={<ErrorPage/>}/>
                    </Routes>
                </Router>
            </ThemeProvider>
        </>

    );
};

export default App;
