import Link from "next/link";
import styles from "./page.module.css";

const SiemReap = () => {
    return (
        <>
        <h1 className={styles.page__title}>SIEM REAP</h1>
        <img className={styles.page__image} src="https://placehold.co/500x300.png" alt={`Foto de Reynisfjara`} width={500} height={300} />
        <p className={styles.page__text}>Siem Reap, uma cidade turística no noroeste do Camboja, é a porta de entrada para as ruínas de Angkor, sede do reino Khmer entre os séculos IX e XV. O vasto complexo de Angkor, com suas intrincadas construções de pedra, inclui o preservado Angkor Wat, o templo principal, que figura na bandeira do Camboja. Rostos gigantes e misteriosos estão esculpidos no Templo Bayon, em Angkor Thom.</p>
        <button className={styles.page__button}>MARQUE SUA VIAGEM</button>
        </>
    )    
}

export default SiemReap;