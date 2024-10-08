import { useState } from "react";
import FormReserva from "./FormReserva";
import Mapa from "./Mapa";

export default function FormularioEMapa() {
    const [showMapa, setShowMapa] = useState(false)

    return (
        <>
            <FormReserva showMapa={showMapa} setShowMapa={setShowMapa} />
            
            {showMapa && <Mapa />}

        </>
    )
}