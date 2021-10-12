import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 100%;
  z-index: 999;
  background-color: rgba(150, 150, 150, 0.123);
  border-radius: 20px;
`;

const Modal = ({ children, visible }) => {
  return (
    <>
      <Wrapper visible={visible}>{children}</Wrapper>
    </>
  );
};

export default Modal;
