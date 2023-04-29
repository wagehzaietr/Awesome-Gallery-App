import styled from "styled-components";
import { motion } from "framer-motion";

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 9999;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0f0f0f60;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    padding: .28rem .5rem;
    border-radius: 10px;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.text};
    margin-top: 1rem;
    position: absolute;
    top: .6rem;
    @media screen and (max-width: 768px) {
      position: static;
    }
  }

  img {
    width: 100%;
    height: 100vh;
    object-fit: contain;
    aspect-ratio: 2/4;
    margin: 0 auto;
    cursor: pointer;
    padding: 3rem;
    margin-top: 2rem ;
    border-radius: 15px;
    @media screen and (max-width: 768px) {
      height: 450px;
      margin-top: 9rem;
    }
  }
  .close {
    position: absolute;
    top: 0;
    margin: 1.3rem;
    right: 0;
    font-size: 2.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    @media screen and (max-width: 768px) {
      left: 9.5rem;
      font-size: 2.5rem;
    }
  }
`;

export { ModalBackdrop };
