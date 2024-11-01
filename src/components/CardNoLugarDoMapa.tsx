import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { isMobile } from "react-device-detect";

export default function CardNoLugarDoMapa() {
    return (isMobile ? (
            <div></div>
        ) : (

            <Card className="w-full bg-zinc-800/85 p-2 rounded-lg overflow-y-auto">
                <CardHeader className="flex flex-col items-start gap-2 text-white max-sm:max-h-screen text-lg md:text-2xl">Bem-vindo(a) à TicketPark Arraial !</CardHeader>
                <CardBody>                
                    <p className="text-success-400">
                    Aqui, você pode garantir seu estacionamento com antecedência, de forma fácil e prática, para aproveitar ao máximo sua visita a Arraial do Cabo.
                    </p>
                    <br></br>
                    <p className="underline">
                    Funciona assim:
                    </p>
                    <p className="text-blue-400">
                    - Para quem vai passar a noite na cidade: oferecemos estacionamentos próximos à sua hospedagem. Assim, você pode deixar o carro em segurança e aproveitar tranquilamente sua estadia.
                    </p>
                    <p className="text-blue-400">
                    - Se a visita for apenas para um dia de passeio (sem pernoite): nós indicamos estacionamentos conforme a localização do seu passeio turístico. Para quem vai fazer o famoso Passeio de Barco ou Mergulho, já temos pontos específicos bem próximos dos locais de partida. Para outros tipos de passeios, ajustamos as opções de estacionamento com base no serviço que você contratou.
                    </p>
                    <br></br>
                    <p className="font-extrabold text-lg text-white">
                    Escolha as opções adequadas em nosso formulário e deixe a nossa inteligência artificial escolher o melhor estacionamento parceiro para sua necessidade!
                    </p>
                    <p className="text-lg text-red-500">
                    TicketPark Arraial : Seu estacionamento garantido, sua experiência tranquila.
                    </p>

                </CardBody>
            </Card>
        )
    )
}