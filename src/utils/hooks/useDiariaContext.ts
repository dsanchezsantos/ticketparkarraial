import { DiariaContext } from "@/contexts/DiariaContext";
import { useContext } from "react";

export default function useDiariaContext() {
    return useContext(DiariaContext)
}