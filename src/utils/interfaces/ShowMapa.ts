import { Dispatcher } from "../types/Dispatcher";

export default interface ShowMapaProps {
    showMapa: boolean,
    setShowMapa: Dispatcher<boolean>
}