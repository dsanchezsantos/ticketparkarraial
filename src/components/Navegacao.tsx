'use client'
import { IconArrowBadgeDownFilled } from "@tabler/icons-react";
import { motion } from 'framer-motion'
import NavegacaoProps from "@/utils/interfaces/NavegacaoProps";

export default function Navegacao(props: NavegacaoProps) {

    function changeNavigation() {
        if (props.navegacao == 0 ) {
            props.setNavegacao(1)
        } else if (props.navegacao == 1 ) {
            props.setNavegacao(0)
        }
    }
    
    return (
        <div className="flex flex-col flex-1 justify-end max-sm:pb-16 min-md:pb-0">
            <motion.div className="self-center"
                animate= {{ y:[0, -10, -5, 0] }}
                transition={{
                    repeat: Infinity,
                    repeatDelay: 1,
                    duration: 0.5,
                }}
            >
                <IconArrowBadgeDownFilled size={80} className={`cursor-pointer ${props.navegacao == 0 ? '' : 'hidden'}`} onClick={changeNavigation}/>
            </motion.div>
        </div>
    )

    
}