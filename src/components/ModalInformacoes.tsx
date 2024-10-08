import {ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { IconSquareXFilled } from "@tabler/icons-react";

export default function ModalInformacoes() {

  return (
    <>      
        <ModalContent className="dark">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2 text-2xl">Bem-vindo(a) à TicketPark Arraial !</ModalHeader>
              <ModalBody>
                <p className="text-success-400">
                Aqui, você pode garantir seu estacionamento com antecedência, de forma fácil e prática, para aproveitar ao máximo sua visita a Arraial do Cabo.
                </p>
                <p className="underline">
                Funciona assim:
                </p>
                <p className="text-blue-400">
                - Para quem vai passar a noite na cidade: oferecemos estacionamentos próximos à sua hospedagem. Assim, você pode deixar o carro em segurança e aproveitar tranquilamente sua estadia.
                </p>
                <p className="text-blue-400">
                - Se a visita for apenas para um dia de passeio (sem pernoite): nós indicamos estacionamentos conforme a localização do seu passeio turístico. Para quem vai fazer o famoso Passeio de Barco ou Mergulho, já temos pontos específicos bem próximos dos locais de partida. Para outros tipos de passeios, ajustamos as opções de estacionamento com base no serviço que você contratou.
                </p>
                <p className="font-extrabold text-xl">
                Escolha as opções adequadas em nosso formulário e deixe a nossa inteligência artificial escolher o melhor estacionamento parceiro para sua necessidade!
                </p>
                <p className="text-lg text-red-500">
                TicketPark Arraial : Seu estacionamento garantido, sua experiência tranquila.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose} startContent={<IconSquareXFilled size={18} />}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
    </>
  );
}