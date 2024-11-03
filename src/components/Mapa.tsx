import { APIProvider, Map } from "@vis.gl/react-google-maps";
import EstacionametosPins from "./EstacionamentosPins";
import { estacionamentos } from "@/data/estacionamentos";
import { Dispatcher } from "@/utils/types/Dispatcher";
import Estacionamentos from "@/utils/interfaces/Estacionamentos";
import { isMobile } from "react-device-detect";
import { Button, Card, CardBody, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs } from "@nextui-org/react";
export default function Mapa(props: {showModalReserva: () => void, setEstacionamentoReserva: Dispatcher<Estacionamentos>}) {

    return (
        <div className="flex flex-1 w-full h-full pb-8">
            
            <APIProvider apiKey={'AIzaSyCEhsni09eUfpnDJFtFjZUblAR-6c9yc4Y'}>
                {
                    isMobile ? (
                        <div className="max-sm:h-96 w-full">
                            <Tabs aria-label="Options" color="warning" className="">
                            <Tab key="mapa" title="Mapa" className="w-full h-full">
                                <Card className="w-full h-full bg-zinc-800/85 text-white">
                                    <CardBody>
                                        <Map
                                            style={{minWidth: '100%', minHeight: '100%', borderRadius: '24px'}}
                                            defaultZoom={13}
                                            defaultCenter={ { lat: -22.9657271, lng: -42.0290065 } }
                                            mapId="b095d1fa09f0c572"
                                            streetViewControl={false}
                                            >
                                            <EstacionametosPins estacionamentos={estacionamentos} showModalReserva={props.showModalReserva} setEstacionamentoReserva={props.setEstacionamentoReserva} />
                                        </Map>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="lista" title="Lista">
                                <Card className="w-full h-full bg-zinc-800/85 text-white">
                                    <CardBody>
                                        <Table 
                                            aria-label="Example empty table"
                                            classNames={{
                                                th: "bg-zinc-800 text-white",
                                                tr: "text-zinc-700",
                                                td: "font-black"

                                            }}
                                        >
                                            <TableHeader className="bg-zinc-500">
                                                <TableColumn>Nome</TableColumn>
                                                <TableColumn>Bairro</TableColumn>
                                                <TableColumn>Ações</TableColumn>
                                            </TableHeader>
                                            <TableBody emptyContent={"Vazio."}>
                                                {estacionamentos.map((estacionamento) => {
                                                    return (
                                                        <TableRow
                                                            key={estacionamento.nome}
                                                            onClick={() => props.showModalReserva()}
                                                            className="cursor-pointer"
                                                        >
                                                            <TableCell>{estacionamento.nome}</TableCell>
                                                            <TableCell>{estacionamento.bairro}</TableCell>
                                                            <TableCell>
                                                                <Button className="font-extrabold" size="sm" color="warning" radius="md" variant="shadow" onPress={() => {props.showModalReserva();props.setEstacionamentoReserva(estacionamento)}}>Ver</Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })}
                                            </TableBody>
                                        </Table>

                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs> 
                        </div>
                    ) : (
                        <div className="flex w-full h-full flex-col">
                        <Tabs aria-label="Options" color="warning" className="">
                            <Tab key="mapa" title="Mapa" className="w-full h-full">
                                <Card className="w-full h-full bg-zinc-800/85 text-white">
                                    <CardBody>
                                        <Map
                                            style={{minWidth: '100%', minHeight: '100%', borderRadius: '24px'}}
                                            defaultZoom={13}
                                            defaultCenter={ { lat: -22.9657271, lng: -42.0290065 } }
                                            mapId="b095d1fa09f0c572"
                                            streetViewControl={false}
                                            >
                                            <EstacionametosPins estacionamentos={estacionamentos} showModalReserva={props.showModalReserva} setEstacionamentoReserva={props.setEstacionamentoReserva} />
                                        </Map>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="lista" title="Lista">
                                <Card className="w-full h-full bg-zinc-800/85 text-white">
                                    <CardBody>
                                        
                                        <Table 
                                            aria-label="Example empty table"
                                            classNames={{
                                                th: "bg-zinc-800 text-white",
                                                tr: "text-zinc-700",
                                                td: "font-black"

                                            }}
                                        >
                                            <TableHeader className="bg-zinc-500">
                                                <TableColumn>Nome</TableColumn>
                                                <TableColumn>Bairro</TableColumn>
                                                <TableColumn>Ações</TableColumn>
                                            </TableHeader>
                                            <TableBody emptyContent={"Vazio."}>
                                                {estacionamentos.map((estacionamento) => {
                                                    return (
                                                        <TableRow
                                                            key={estacionamento.nome}
                                                            onClick={() => props.showModalReserva()}
                                                            className="cursor-pointer"
                                                        >
                                                            <TableCell>{estacionamento.nome}</TableCell>
                                                            <TableCell>{estacionamento.bairro}</TableCell>
                                                            <TableCell>
                                                                <Button className="font-extrabold" size="sm" color="warning" radius="md" variant="shadow" onPress={() => {props.showModalReserva()}}>Ver</Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })}
                                            </TableBody>
                                        </Table>

                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs> 
                        </div>
                    )
                }
            </APIProvider>
        </div>
    )
}