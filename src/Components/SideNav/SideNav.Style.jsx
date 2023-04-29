import styled from "styled-components";
import { motion } from "framer-motion";

const SideNavWrapper = styled(motion.div)`
  width: 200px;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.colors.backgroundside};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 1rem;
  height: 100vh;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`;

const NavItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .btn {
    padding: 0.2rem 0.6rem;
    font-size: 1rem;
    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    text-transform: capitalize;
  }

  li {
    .switch {
      font-size: 17px;
      position: relative;
      display: inline-block;
      width: 64px;
      height: 34px;
      margin-bottom: 2rem;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #73c0fc;
      transition: 0.4s;
      border-radius: 30px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 30px;
      width: 30px;
      border-radius: 20px;
      left: 2px;
      bottom: 2px;
      z-index: 2;
      background-color: #e8e8e8;
      transition: 0.4s;
    }

    .sun svg {
      position: absolute;
      top: 6px;
      left: 36px;
      z-index: 1;
      width: 24px;
      height: 24px;
    }

    .moon svg {
      fill: #73c0fc;
      position: absolute;
      top: 5px;
      left: 5px;
      z-index: 1;
      width: 24px;
      height: 24px;
    }

    /* .switch:hover */
    .sun svg {
      animation: rotate 15s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    /* .switch:hover */
    .moon svg {
      animation: tilt 5s linear infinite;
    }

    @keyframes tilt {
      0% {
        transform: rotate(0deg);
      }

      25% {
        transform: rotate(-10deg);
      }

      75% {
        transform: rotate(10deg);
      }

      100% {
        transform: rotate(0deg);
      }
    }

    .input:checked + .slider {
      background-color: #183153;
    }

    .input:focus + .slider {
      box-shadow: 0 0 1px #183153;
    }

    .input:checked + .slider:before {
      transform: translateX(30px);
    }
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  h5 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 500;
  }

  padding: 1rem;
`;

export { SideNavWrapper, NavItem };
