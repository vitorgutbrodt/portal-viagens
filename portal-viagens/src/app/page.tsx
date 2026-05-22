import Image from "next/image";
import styles from "./page.module.css";
import Title from "./components/title";
import Grid from "./components/grid";
import {destinos} from "@/lib/destinos";

export default function Home() {
  return (
    <>
    <Title title="Escolha seu destino:" />
    <Grid destinos={destinos}/>  
    </>
  );
}
