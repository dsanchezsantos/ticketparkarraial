'use client'
import Image from "next/image";
import Logo from "../assets/whiteLogo.png"
import { motion } from "framer-motion";
import NavegacaoProps from "@/utils/interfaces/NavegacaoProps";

export default function Cabecalho(props: NavegacaoProps) {
    return <motion.div
                        animate={{ rotate:[0, 3, 6, 3, 0, -3, -6, -3, 0] }}
                        
                        transition={{
                            repeat: Infinity,
                            repeatDelay: 3,
                            duration: 2,
                        }}
                        className="pt-4"
            >

        <Image 
            src={Logo} 
            alt="Logo TicketPark" 
            className={`max-w-96 h-auto self-center ${props?.navegacao == 0 ? '' : 'cursor-pointer'}`} 
            width={props?.navegacao == 0 ? 320 : 110}
            onClick={() => {
                if (props?.navegacao == 1) {
                    props?.setNavegacao(0)
                }
            }}
        />

    </motion.div>
}