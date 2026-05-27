import Link from "next/link";
import styles from "./page.module.css";

const Burgos = () => {
    return (
        <>
        <h1 className={styles.page__title}>BURGOS</h1>
        <img className={styles.page__image} src="https://placehold.co/500x300.png" alt={`Foto de Reynisfjara`} width={500} height={300} />
        <p className={styles.page__text}>Burgos é uma histórica cidade medieval localizada no norte da Espanha, na comunidade autônoma de Castela e Leão. Famosa por seu clima frio, é mundialmente conhecida por sua arquitetura gótica, por ser um ponto de parada fundamental no Caminho de Santiago e pelo sítio arqueológico de Atapuerca</p>
        <button className={styles.page__button}>MARQUE SUA VIAGEM</button>
        </>
    )    
}

export default Burgos;