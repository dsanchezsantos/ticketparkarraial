import Estacionamentos from "@/utils/interfaces/Estacionamentos";
import { Dispatcher } from "@/utils/types/Dispatcher";
import { AdvancedMarker } from "@vis.gl/react-google-maps";


export default function EstacionametosPins(props: {estacionamentos: Estacionamentos[], showModalReserva: () => void, setEstacionamentoReserva: Dispatcher<Estacionamentos>}) {

    return (
        <>
        {props.estacionamentos.map( (estacionamento: Estacionamentos) => (
            <AdvancedMarker
            clickable={true}
            key={estacionamento.nome}
            position={estacionamento.localizacao}
            onClick={() => {props.showModalReserva();props.setEstacionamentoReserva(estacionamento)}}
            >
            </AdvancedMarker>
        ))}
        </>
    )
}