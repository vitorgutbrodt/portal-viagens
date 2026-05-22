import { Destino } from "@/types/types";
import Link from "next/link";
import styles from './card.module.css';

type Props = {
    destino: Destino
}

const Card = ({destino} : Props) => {
    const {id, nome, imagem, description, link} = destino;
    return (
        <div className={styles.card} key={id}>            
                <img src={imagem} alt={`Foto de ${nome}`} width={300} height={200} className={styles.card__image}/>
            <Link className={styles.card__name}href={link}>
                <h3>{nome}</h3>
            </Link>            
            <p className={styles.card__description}>{description}</p>            
        </div>
    )
}

export default Card;