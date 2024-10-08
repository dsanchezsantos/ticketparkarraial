import { Dispatcher } from "../types/Dispatcher";

export default interface NavegacaoProps {
    setNavegacao: Dispatcher<number>,
    navegacao?: number
}