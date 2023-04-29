import React from "react";
import styled from "styled-components";
import {Circles, Grid,Hearts,Rings,Puff,ThreeDots} from "react-loader-spinner";

const Wrapper = styled.div`
margin: 1rem;
`

const ProgressBar = ({ file, setFile }) => {
  return (
    <Wrapper>
      <ThreeDots
        type="TailSpin"
        color="#168b72"
        height={60}
        width={60}
      />
    </Wrapper>
  );
};

export default ProgressBar;
