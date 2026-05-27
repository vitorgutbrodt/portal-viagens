import Link from "next/link";
import styles from "./page.module.css";

const Queenstown = () => {
    return (
        <>
        <h1 className={styles.page__title}>QUEENSTOWN</h1>
        <img className={styles.page__image} src="https://placehold.co/500x300.png" alt={`Foto de Reynisfjara`} width={500} height={300} />
        <p className={styles.page__text}>Queenstown é uma cidade na Nova Zelândia situada na Ilha do Sul. Fica às margens de um lago cristalino cercado de montanhas. Na cidade calma vê-se poucos carros e várias ruas para pedestres lotadas de pequenas lojas de recordações. Com cerca de 20 mil habitantes fixos, na alta temporada é invadida por turistas e quase dobra a população da cidade.</p>
        <button className={styles.page__button}>MARQUE SUA VIAGEM</button>
        </>
    )    
}

export default Queenstown;