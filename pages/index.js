import Head from "next/head";
import { useState, useContext } from "react";
import Bar from "../components/Bar";
import styles from "../styles/Home.module.css";
import DataTable from "../components/Data";
import styled from "styled-components";
import Overview from "../components/layouts/Overview";
import ButtonType from "../components/NavButtons";
import { IoNotifications } from "react-icons/io5";
import { Context } from "../store/Global/GlobalState";

export default function Home() {
  const [state] = useContext(Context);
  const [buttonId, setButtonId] = useState(1);
  const getButtonId = (e) => {
    setButtonId(parseInt(e.target.id) + 1);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Vorgez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bar>
        <Main visible={state.open}>
          <div className="topbar">
            <div>
              <ButtonType
                buttons={["Overview", "Guess list"]}
                getId={getButtonId}
              />
            </div>
            <div className="notification">
              <p>
                <IoNotifications />
              </p>
              <p className="image"></p>
            </div>
          </div>
          {buttonId === 1 && <Overview />}
          {buttonId === 2 && <DataTable />}
        </Main>
      </Bar>
    </div>
  );
}

const Main = styled.main`
  width: ${(props) => (props.visible ? "calc(100% - 250px)" : "100%")};
  margin-left: ${(props) => (props.visible ? "250px" : "0")};
  transition: all 300ms ease;
  padding: 0 30px 30px 30px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;
