import React from "react";
import styled from "styled-components";

const StyledSideElement = styled.div<SideProps>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.orientation === "left" ? "40px" : "auto")};
  right: ${(props) => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${(props) => (props.orientation === "left" ? "20px" : "auto")};
    right: ${(props) => (props.orientation === "left" ? "auto" : "20px")};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

type SideProps = {
  orientation: "left" | "right";
  children: any;
};

const Side = (props: SideProps) => {
  const { orientation, children } = props;

  return (
    <StyledSideElement orientation={orientation}>{children}</StyledSideElement>
  );
};

export default Side;
