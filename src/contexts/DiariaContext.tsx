import React, { createContext, useState } from "react";

export interface DiariaInterface {
    isDiaria: boolean,
    changeDiaria: () => void
}

export const DiariaContext = createContext({} as DiariaInterface)

export const DiariaProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [diaria, setDiaria] = useState(false)

    function changeDiaria() {
        if (diaria) {
            setDiaria(false)
        } else {
            setDiaria(true)
        }
    }

    return (
        <DiariaContext.Provider value={{isDiaria: false, changeDiaria}}>
            {children}
        </DiariaContext.Provider>
    )
}