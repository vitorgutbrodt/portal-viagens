import { Destino } from "@/types/types";
import Link from "next/link";

type Props = {
    destino: Destino
}

const Card = ({destino} : Props) => {
    const {id, nome, imagem, description, link} = destino;
    return (
        <div key={id}>            
                <img src={imagem} alt={`Foto de ${nome}`} width={300} height={200}/>
            <Link href={link}>
                <h3>{nome}</h3>
            </Link>            
            <p>{description}</p>            
        </div>
    )
}

export default Card;