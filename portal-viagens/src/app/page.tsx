import Image from "next/image";
import styles from "./page.module.css";
import Title from "./components/title";
import Grid from "./components/grid";
import {destinos} from "@/lib/destinos";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Title title="Bem-vindo a Portal Viagens!" />
    <p className={styles.page__text}>Seu guia para conhecer destinos turísticos fascinantes ao redor do mundo. Explore informações, curiosidades e atrações de diferentes lugares e encontre inspiração para sua próxima viagem.</p>
    <p className={styles.page__text}>Descubra destinos incríveis ao redor do mundo e encontre informações úteis para planejar sua próxima aventura. No Portal Viagens, você pode explorar cidades históricas, paisagens naturais deslumbrantes e atrações culturais únicas, tudo em um só lugar. Navegue pelos destinos disponíveis e inspire-se para sua próxima viagem.</p>
    <Link href="/destinos" className={styles.link}>
      <button className={styles.page__button}>VER DESTINOS</button>
    </Link>
    </>
  );
}
