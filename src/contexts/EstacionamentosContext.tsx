import { estacionamentos } from "@/data/estacionamentos";
import Estacionamentos from "@/utils/interfaces/Estacionamentos";
import React, { createContext, useState } from "react";

export interface EstacionamentoContextInterface {
    estacionamentosMap: Estacionamentos[],
    changeEstacionamentos: (bairroParam: string) => void
}

export const EstacionamentoContext = createContext({} as EstacionamentoContextInterface)

export const EstacionamentoProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [estacionamentosMap, setEstacionamentosMap] = useState([] as Estacionamentos[])

    function changeEstacionamentos(bairroParam: string) {
        if (bairroParam != 'TODOS'){
            const estacionamentosFiltered = estacionamentos.filter( (estacionamento) => estacionamento.bairro === bairroParam )
            setEstacionamentosMap(estacionamentosFiltered)
        } else {
            setEstacionamentosMap(estacionamentos)
        }
    }

    return (
        <EstacionamentoContext.Provider value={{estacionamentosMap, changeEstacionamentos}}>
            {children}
        </EstacionamentoContext.Provider>
    )
}