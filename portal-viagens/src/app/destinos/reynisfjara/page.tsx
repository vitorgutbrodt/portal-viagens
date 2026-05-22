import Link from "next/link";
import styles from './page.module.css';

const Reynisfjara = () => {
    return (
        <>
        <h1 className={styles.page__title}>REYNISFJARA</h1>
        <img className={styles.page__image} src="https://placehold.co/500x300.png" alt={`Foto de Reynisfjara`} width={500} height={300} />
        <p className={styles.page__text}>Reynisfjara é uma praia popular de areia preta no sul da Islândia, perto da cidade de Vík í Mýrdal. Faz parte do Geoparque Global da UNESCO de Katla, em terreno privado. Em fevereiro de 2026, após semanas de ondas fortes e ventos de leste, parte das icônicas colunas de basalto desabou, causando significativa erosão na praia.</p>
        <p className={styles.page__text}>A Caverna Hálsanefshellir, com suas colunas de basalto, está localizada na extremidade leste da praia, e a oeste encontra-se o promontório de Dyrhólaey. Os rochedos marinhos de Reynisdrangar também estão localizados nessa região. O vulcão Eyjafjallajökull é visível da praia.</p>
        <button className={styles.page__button}>MARQUE SUA VIAGEM</button>
        </>
    )    
}

export default Reynisfjara;