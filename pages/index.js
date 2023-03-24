import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Game from "../components/Game";
import { data } from "../data/data";

export default function Home() {
  return (
    <div className="container">
      <Game questions={data} />
    </div>
  );
}
