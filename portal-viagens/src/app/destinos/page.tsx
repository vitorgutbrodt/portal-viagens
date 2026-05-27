import Image from "next/image";
import styles from "./page.module.css";
import Title from "@/app/components/title";
import Grid from "@/app/components/grid";
import {destinos} from "@/lib/destinos";

export default function DestinosPage() {
  return (
    <>
    <Title title="Escolha seu destino:" />
    <Grid destinos={destinos}/>  
    </>
  );
}
