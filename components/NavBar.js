import Image from "next/image";
import {
  IoHomeOutline,
  IoWalletOutline,
  IoFolderOpenOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoDocumentsOutline,
} from "react-icons/io5";
import { FaAngleDoubleLeft } from "react-icons/fa";
import styled from "styled-components";

const mainLink = [
  { name: "Dashboard", icon: <IoHomeOutline /> },
  {
    name: "Catering status",
    icon: <IoFolderOpenOutline />,
  },
  {
    name: "Guest traffic",
    icon: <IoDocumentsOutline />,
  },
  { name: "Gifts", icon: <IoWalletOutline /> },
];

const configLink = [
  { name: "Account", icon: <IoSettingsOutline /> },
  { name: "Wallet", icon: <IoSettingsOutline /> },
  {
    name: "Help & Support",
    icon: <IoSettingsOutline />,
  },
];

const logout = [{ name: "Logout", icon: <IoLogOutOutline /> }];

const NavBar = () => {
  return (
    <Nav>
      <div className={`nav-close`}>
        <span>
          <FaAngleDoubleLeft />
        </span>
      </div>

      <div className="brand">
        <Image src="/images/logo.png" height={51} width={130} alt="Logo" />
      </div>

      <LinkContainer>
        <div className="link-title">
          <p>MAIN MENU</p>
        </div>

        <ul>
          {mainLink.map((item, index) => {
            return (
              <li key={index} className="">
                <a className="link">
                  <span className="link-icon" style={{ fontSize: 20 }}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </LinkContainer>

      <LinkContainer>
        <div className="link-title">
          <p>SETTINGS</p>
        </div>

        <ul>
          {configLink.map((item, index) => {
            return (
              <li key={index} className="">
                <a className="link">
                  <span className="link-icon" style={{ fontSize: 20 }}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </LinkContainer>
      <LinkContainer>
        <ul>
          {logout.map((item, index) => {
            return (
              <li key={index} className="">
                <a className="link">
                  <span className="link-icon" style={{ fontSize: 20 }}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </LinkContainer>
    </Nav>
  );
};
// ${(props) => (props.visible ? "0px" : "-250px")}
export default NavBar;

const Nav = styled.div`
  width: 250px;
  height: 100vh;
  padding: 50px 10px 0;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-left: 0px;
  transition: all 300ms ease;
  z-index: 1;

  .nav-close {
    width: 40px;
    height: 40px;
    background-color: rgba(0, 153, 255, 0.096);
    background-color: #030749;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    right: 0;
    top: 10px;
    color: #000;
    color: #ffffff;
    cursor: pointer;
    right: ${(props) => (props.visible ? "0px" : "-40px")};
    span {
      display: inline-block;
      transform: ${(props) => (props.visible ? "" : "rotate(180deg)")};
      transition: transform 300ms 300ms ease;
    }
    &.active {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  .link {
    display: flex;
    align-items: center;
    .link-icon {
      margin-top: 7px;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 50px 0;
    margin-left: ${(props) => (props.visible ? "0px" : "-80%")};
    z-index: 9;
    /* left: -100%; */
    /* display: none; */

    .brand {
      padding-left: 20px;
    }
  }
`;

const LinkContainer = styled.div`
  margin-top: 50px;
  padding: 0 10px;

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    margin-bottom: 5px;
    margin-top: 5px;
    cursor: pointer;
    a {
      display: block;
      padding: 5px 10px;
      &:hover {
        color: #000;
      }
    }
    &:hover {
      background-color: #f8f7f8;
      border-radius: 5px;
    }
  }

  .link-title {
    margin-bottom: 5px;
    margin-left: 5px;
    p {
      font-size: 12px;
      font-weight: bold;
      color: #444;
    }
  }

  .link {
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    color: #777;
    .link-icon {
      margin-right: 20px;
    }
  }

  .selected {
    background: #f8f7f8;
    border-radius: 5px;
  }

  .selected a {
    color: #0066ff !important;
  }

  @media (max-width: 768px) {
    padding: 0;

    li {
      a {
        padding: 10px 40px;
      }
    }

    .link-title {
      padding-left: 30px;
    }

    .selected {
      border-radius: 0;
    }
  }
`;
