import React, { createContext, useState } from "react";

export interface DiariaInterface {
    isDiaria: boolean,
    changeDiaria: (changeDiariaValue: boolean) => void
}

export const DiariaContext = createContext({} as DiariaInterface)

export const DiariaProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [diaria, setDiaria] = useState(false)

    function changeDiaria(changeDiariaValue: boolean) {
        setDiaria(changeDiariaValue)
    }

    return (
        <DiariaContext.Provider value={{isDiaria: diaria, changeDiaria}}>
            {children}
        </DiariaContext.Provider>
    )
}