import Link from "next/link";
import styles from "./page.module.css";

const Atenas = () => {
    return (
        <>
        <h1 className={styles.page__title}>ATENAS</h1>
        <img className={styles.page__image} src="https://placehold.co/300x200.png" alt={`Foto de Atenas`} width={500} height={300} />
        <p className={styles.page__text}>Atenas é a capital e a maior cidade da Grécia. A cidade domina a região da Ática e é uma das cidades mais antigas do mundo, sendo que seu território está continuamente habitado há 3 400 anos. A Atenas Clássica, do período da Grécia Antiga, foi uma poderosa pólis (cidade-Estado) que surgiu em conjunto com o desenvolvimento do porto de Pireu. Um centro artístico, estudantil e filosófico desde a Antiguidade, a cidade sediou a Academia de Platão e o Liceu de Aristóteles, além de ser amplamente considerada como o berço da civilização ocidental e da democracia.</p>
        <button className={styles.page__button}>MARQUE SUA VIAGEM</button>
        </>
    )    
}

export default Atenas;