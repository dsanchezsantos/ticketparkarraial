'use client'
import { opcoesDeFormulario } from "@/data/opcoesDeFormulario";
import { Button, Modal, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { IconEraser, IconInfoSquareRoundedFilled, IconMapPinSearch, IconSelector } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import ModalInformacoes from "./ModalInformacoes";
import { Dispatcher } from "@/utils/types/Dispatcher";
import useDiariaContext from "@/utils/hooks/useDiariaContext";

export default function FormReserva(props: {showMapa: boolean, setShowMapa: Dispatcher<boolean>}) {

    const { changeDiaria } = useDiariaContext()

    const [ option, setOption ] = useState(-1)
    const bairroDeDestino = document.getElementById('4');
    const localizarDestino = document.getElementById('3');
    const qualPasseio = document.getElementById('2');
    const programacao = document.getElementById('1');
    const buttons = document.getElementById('buttons');

    useEffect(() => {
        if (option == 1) {
            bairroDeDestino?.classList.remove('hidden')
            localizarDestino?.classList.add('hidden')
            qualPasseio?.classList.add('hidden')
            programacao?.classList.add('hidden')
            buttons?.classList.add('hidden')
            changeDiaria(false)
        } else if (option == 0) {
            bairroDeDestino?.classList.add('hidden')
            localizarDestino?.classList.add('hidden')
            qualPasseio?.classList.add('hidden')
            programacao?.classList.remove('hidden')
            buttons?.classList.add('hidden')
            changeDiaria(true)
        } else if (option == 2) {
            bairroDeDestino?.classList.add('hidden')
            localizarDestino?.classList.add('hidden')
            qualPasseio?.classList.remove('hidden')
            buttons?.classList.add('hidden')
        } else if (option == 3 || option == 4) {
            bairroDeDestino?.classList.add('hidden')
            localizarDestino?.classList.remove('hidden')
            qualPasseio?.classList.add('hidden')
            buttons?.classList.add('hidden')
        } else if (option == 6) {
            localizarDestino?.classList.remove('hidden')
            buttons?.classList.add('hidden')
        } else if (option == 5) {
            //TODO Buscar estacionamentos Praia dos Anjos
            localizarDestino?.classList.add('hidden')
            buttons?.classList.remove('hidden')
        } else if (option == 7) {
            bairroDeDestino?.classList.remove('hidden')
        } else if (option == 8) {
            bairroDeDestino?.classList.add('hidden')
            buttons?.classList.remove('hidden')
        } else if (option == 9) {
            //TODO Buscar estacionamentos Praia Grande
            buttons?.classList.remove('hidden')
        } else if (option == 10) {
            //TODO Buscar estacionamentos Prainha
            buttons?.classList.remove('hidden')
        } else if (option == 11) {
            //TODO Buscar estacionamentos Praia dos Anjos
            buttons?.classList.remove('hidden')
        } else if (option == 12) {
            //TODO Buscar estacionamentos Centro
            buttons?.classList.remove('hidden')
        } else if (option == 13) {
            bairroDeDestino?.classList.add('hidden')
            localizarDestino?.classList.add('hidden')
            qualPasseio?.classList.add('hidden')
            programacao?.classList.add('hidden')
            buttons?.classList.add('hidden')
            props.setShowMapa(false)
        } else {
            bairroDeDestino?.classList.remove('hidden')
            localizarDestino?.classList.remove('hidden')
            qualPasseio?.classList.remove('hidden')
            programacao?.classList.remove('hidden')
            buttons?.classList.remove('hidden')
        }
    }, [option])

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        
        <div className="flex">
            <div className="flex flex-col h-full w-64 dark bg-zinc-800/50 p-2 rounded-lg">
                <div className="flex gap-4 justify-center items-center pb-2">
                <Button onPress={onOpen} className="font-extrabold" color="primary" radius="md" variant="flat" startContent={<IconInfoSquareRoundedFilled size={22} />}>Informações</Button>
                </div>

                {opcoesDeFormulario.map((opcao) => {
                    return (
                        <div id={opcao.node.toString()} key={opcao.node} className={`${opcao.node == 0 ? '' : 'hidden'}`} >
                        <Select key={opcao.node} label={opcao.label} selectionMode="single" className='py-1' selectorIcon={<IconSelector color="white" />}>
                                {opcao.opcoes.map((texto, indexOpcao) => {
                                    return (
                                        <SelectItem className="bg-zinc-700 text-white" key={indexOpcao} value={texto[1]} onPress={() => setOption(texto[1])}>{texto[0]}</SelectItem>
                                    )
                                })}
                        </Select>
                        </div>
                    )
                })}

                <div id="buttons" className="hidden">
                    <div className="flex gap-2 justify-center items-center pt-2">
                    <Button className="font-extrabold" size="sm" color="secondary" radius="md" variant="flat" startContent={<IconEraser size={18} />} onPress={() => {setOption(13)}}>Limpar</Button>
                    <Button className="font-extrabold" size="sm" color="warning" radius="md" variant="flat" startContent={<IconMapPinSearch size={18}  />} onPress={() => {props.setShowMapa(true)}}>Buscar</Button>
                    </div>
                </div>
            </div> 

            <Modal size="3xl" className="max-sm:w-screen h-full" backdrop="blur" isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside"><ModalInformacoes /></Modal>
        </div>
    )
}