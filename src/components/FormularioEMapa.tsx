import { useState } from "react";
import FormReserva from "./FormReserva";
import Mapa from "./Mapa";
import ModalReserva from "./ModalReserva";
import { Modal, useDisclosure } from "@nextui-org/react";
import Estacionamentos from "@/utils/interfaces/Estacionamentos";

export default function FormularioEMapa() {
    const [showMapa, setShowMapa] = useState(false)
    const [estacionamentoReserva, setEstacionamentoReserva] = useState<Estacionamentos>({nome: '', localizacao: { lat: 0, lng: 0  }, bairro: ''})
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    

    return (
        <>
            <FormReserva showMapa={showMapa} setShowMapa={setShowMapa} />
            
            {
                showMapa && 

                <Mapa showModalReserva={onOpen} setEstacionamentoReserva={setEstacionamentoReserva} />
            }

            <Modal size="5xl" className="max-sm:w-screen h-fit" backdrop="blur" isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside"><ModalReserva estacionamento={estacionamentoReserva} /></Modal>
        </>
    )
}