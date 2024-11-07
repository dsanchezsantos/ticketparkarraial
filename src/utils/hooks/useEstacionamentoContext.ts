import { EstacionamentoContext } from "@/contexts/EstacionamentosContext";
import { useContext } from "react";

export default function useEstacionamentoContext() {
    return useContext(EstacionamentoContext)
}