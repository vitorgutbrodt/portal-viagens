import Card from "@/app/components/card";
import { Destino } from "@/types/types";

type Props = {
    destinos: Destino[]
}

const Grid = ({destinos} : Props) => {
    return(
        <section>
            {destinos.map(destino => <Card key={destino.id} destino={destino}/>)}
        </section>
    )
}

export default Grid;