import Link from "next/link";
import styled from "styled-components";

function Navbar() {
  return (
    <Navigation>
      <div>
        <Link href="/">
          <a> DigiCrypt </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/dashboard">
            <a> Markets </a>
          </Link>
        </li>
        <li>
          <Link href="/tutorials">
            <a> Tutorials </a>
          </Link>
        </li>
        <li>
          <Link href="/exchanges">
            <a> Exchanges </a>
          </Link>
        </li>
        <li>
          <Link href="/account">
            <a> Account </a>
          </Link>
        </li>
        <li>
          <NavButton> SignUp </NavButton>
        </li>
      </ul>
    </Navigation>
  );
}
const Navigation = styled.div`
  position: absolute;
  width: 100%;
  height: 65px;
  padding: 5px;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  background: #3c3c3d;
  ul {
  list-style-type: none;
  display:flex;
  flex-direction:row;
  width:50%;
  align-items:center;
  justify-content:space-around;
}
`;
const NavButton = styled.button`
background: #FFFFFF;
box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.25);
border-radius: 28px;
width: 132px;
height: 42px;
`;
export default Navbar;
