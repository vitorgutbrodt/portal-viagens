import { destinos } from "@/lib/destinos";    
import Image from "next/image";
import Title from "@/app/components/title";
import styles from "./page.module.css";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DestinoPage({
  params,
}: Props) {
  const { id } = await params;

  const destino = destinos.find(
    (destino) => destino.id === Number(id)
  );

  if (!destino) {
    return <h1>Destino não encontrado</h1>;
  }

  return (
    <main>
      <Link href="/destinos" className={styles.link}>
         <button className={styles.page__returnbutton}>VOLTAR</button>
      </Link>      
      <Title title={destino.nome} />
      <Image src={destino.imagem} alt={`Foto de ${destino.nome}`} width={600} height={400} className={styles.page__image} />
      <p className={styles.page__text}>{destino.text}</p>
      <button className={styles.page__button}>MARQUE SUA VIAGEM</button>
    </main>
  );
}