import Estacionamentos from "@/utils/interfaces/Estacionamentos";
import { AdvancedMarker } from "@vis.gl/react-google-maps";


export default function EstacionametosPins(props: {estacionamentos: Estacionamentos[]}) {

    return (
        <>
        {props.estacionamentos.map( (estacionamento: Estacionamentos) => (
            <AdvancedMarker
            key={estacionamento.nome}
            position={estacionamento.localizacao}
            >
            </AdvancedMarker>
        ))}
        </>
    )
}