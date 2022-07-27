import Navbar from "../components/Navbar";
import styled from "styled-components";
export default function Home() {
  return (
    <LandingPage >
      <Navbar />{" "}
    </LandingPage>
  );
}

const LandingPage = styled.div`
width:100%;
height:100%;
background: linear-gradient(164.84deg, #676D9F 10.66%, #681318 50.5%, #100111 86.8%);`