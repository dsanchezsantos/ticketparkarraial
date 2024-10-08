'use client'
import BackgroundImage from "@/components/BackgroundImage";
import SocialMedia from "@/components/SocialMedia";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../assets/whiteLogo.png"

export default function Reservado() {
    return (
        <div className="relative w-screen h-screen">
            <BackgroundImage />

            <div className=" flex flex-col items-center absolute w-screen h-screen">
                <SocialMedia />

                <motion.div
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
                    className={`max-w-96 h-auto self-center cursor-pointer`} 
                    width={320}
                />
            </motion.div>

            <span className="max-sm:text-xl md:text-4xl">Reserva solicitada com sucesso!</span>

            </div>
        </div>
    )
}