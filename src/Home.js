import React from 'react'
import styled from 'styled-components';
 
const Home = () => {
  return (
    <Wrapper className="test">Home</Wrapper>
  )
};

const Wrapper = styled.section`
background-color : ${({theme})=> theme.colors.bg };
`;

export default Home