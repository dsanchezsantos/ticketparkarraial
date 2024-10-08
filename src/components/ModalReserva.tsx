'use client'
import Estacionamentos from "@/utils/interfaces/Estacionamentos";
import { Button, DateRangePicker, ModalBody, ModalContent, ModalFooter, ModalHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { IconCalendarTime, IconMapSearch } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import {parseDate} from "@internationalized/date";

export default function ModalReserva(props: {estacionamento: Estacionamentos}) {

    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda se necessário
    const dia = String(dataAtual.getDate()).padStart(2, '0'); // Adiciona zero à esquerda se necessário

    const dataFormatada = `${ano}-${mes}-${dia}`;

    const [value, setValue] = useState({
        start: parseDate(dataFormatada),
        end: parseDate(dataFormatada),
    });

    const handleClick = () => {
        window.open(`https://api.whatsapp.com/send?phone=5522999140495&text=Ol%C3%A1,%20gostaria%20de%20fazer%20uma%20reserva.%0A%0AEstou%20enviando%20esta%20mensagem%20autom%C3%A1tica%20referente%20a%20reserva%20de%20uma%20vaga%20de%20estacionamento.%0A%0ASegue%20o%20Ticket:%0A%0A*Ticket%20de%20Reserva%20de%20Estacionamento*%0A%0A_Detalhes%20da%20reserva_:%0A*%20Nome:%20${props.estacionamento.nome}%0A*%20Bairro:%20${props.estacionamento.bairro}%0A*%20Datas:%20de%20${value.start.day}/${value.start.month}/${value.start.year}%20a%20${value.end.day}/${value.end.month}/${value.end.year}%0A%0A_Mensagem%20gerada%20automaticamente%20atrav%C3%A9s%20do%20site%20do%20TicketPark%20Arraial._%0A`, '_blank')
    }

    return (
        <>
        <ModalContent className="dark">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-2 text-xl">Confirmação de Reserva</ModalHeader>
              <ModalBody>
              <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Nome</TableColumn>
                    <TableColumn>Bairro</TableColumn>
                    <TableColumn>Data(s) da reserva</TableColumn>
                    <TableColumn>Google Maps</TableColumn>
                    <TableColumn>Ações</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>{props.estacionamento.nome}</TableCell>
                        <TableCell>{props.estacionamento.bairro}</TableCell>
                        <TableCell>
                            <DateRangePicker 
                                label="Clique para escolher a(s) data(s)"
                                value={value}
                                onChange={setValue}
                                className="max-w-xs"
                                calendarProps={{
                                    classNames: {
                                        base: "bg-zinc-800",
                                        gridHeader: "bg-zinc-800",
                                        headerWrapper: "bg-zinc-800",
                                    }
                                }}
                            />
                        </TableCell>
                        <TableCell>
                            <Tooltip content="Ver no Google Maps" color="primary" showArrow={true}>
                                <Link href={`
                                    https://www.google.com/maps/place/${props.estacionamento.localizacao.lat},${props.estacionamento.localizacao.lng}/@${props.estacionamento.localizacao.lat},${props.estacionamento.localizacao.lng},23z
                                `} target="_blank">
                                    <Button size="sm" variant="flat" color="primary" startContent={<IconMapSearch />} />
                                </Link>
                            </Tooltip>
                        </TableCell>
                        <TableCell>
                            <Tooltip content="Reservar" color="success" showArrow={true}>
                                <Link href="/reservado">
                                    <Button size="sm" color="success" variant="flat" startContent={<IconCalendarTime size={18}/>} onPress={handleClick}/>
                                </Link>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
                
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
    </>
    )
}