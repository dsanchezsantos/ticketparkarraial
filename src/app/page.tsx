'use client'
import BackgroundImage from "@/components/BackgroundImage";
import Cabecalho from "@/components/Cabecalho";
import FormularioEMapa from "@/components/FormularioEMapa";
import Navegacao from "@/components/Navegacao";
import SocialMedia from "@/components/SocialMedia";
import TituloPagina from "@/components/TituloPagina";
import { useState } from "react";


export default function Home() {
  const [navegacao, setNavegacao] = useState(0)

  return (
    <div className="relative min-w-screen min-h-screen overflow-y-auto bg-zinc-800">
      <BackgroundImage />

      <div className=" flex flex-col items-center absolute w-screen h-screen">
        <SocialMedia />
        <Cabecalho setNavegacao={setNavegacao} navegacao={navegacao} />
        <TituloPagina navegacao={navegacao} />
        {
          navegacao == 0 ? 
            <Navegacao setNavegacao={setNavegacao} navegacao={navegacao} /> : 
            <div className="flex flex-1 w-full gap-16 px-12 pt-8 max-md:flex-col items-center md:items-start">
              <FormularioEMapa />
            </div>
        }
      </div>
    </div>
  );
}
