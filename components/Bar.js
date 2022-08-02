import Head from "next/head";
import NavBar from "./NavBar";
import styled from "styled-components";

const Bar = ({ children }) => {
  return (
    <>
      <Head>
        <title>Vorgez</title>
      </Head>

      <Section>
        <NavBar />
        <Main>{children}</Main>
      </Section>
    </>
  );
};

const Section = styled.div`
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Main = styled.main`
  width: ${(props) => (props.visible ? "calc(100% - 250px)" : "100%")};
  margin-left: ${(props) => (props.visible ? "250px" : "0")};
  transition: all 300ms ease;
  padding-left: 30px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export default Bar;
