import styled from "styled-components";

const Header = styled.header``;

const Container = styled.header`
  display: flex;
  padding-top: 1rem;
  align-items: center;
  justify-content: center;

  .menu {
    color: ${({ theme }) => theme.colors.text};
    margin-left: 1rem;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 768px) {
    display: flex;
  }
  }

  .logo {
  }

  .user-img{
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin-left: 1rem;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      display: none;
    }

  }

  .btn {
    padding: 0.4rem 0.6rem;
    font-size: 1rem;
    border-radius: 0.6rem;
    margin-left: 1rem;
    margin-top: .1rem;
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    text-transform: capitalize;
    @media screen and (max-width: 768px) {
      display: none;
    }

    &:hover {
      background-color: #116855;
      color: #fff;
    }
  }

  .left {
    flex: 1;
  }

  padding-left: 3rem;
  padding-right: 3rem;

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .right {
    justify-content: end;
    display: flex;
    flex: 1;

    .btn-mobile {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    .switch {
      font-size: 17px;
      position: relative;
      display: inline-block;
      width: 64px;
      height: 34px;
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
`;

export { Header, Container };
