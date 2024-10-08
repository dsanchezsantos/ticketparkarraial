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
    <div className="relative w-screen h-screen">
      <BackgroundImage />

      <div className="absolute w-screen h-screen flex flex-col items-center">
        <SocialMedia />
        <Cabecalho setNavegacao={setNavegacao} navegacao={navegacao} />
        <TituloPagina navegacao={navegacao} />
        {
          navegacao == 0 ? 
            <Navegacao setNavegacao={setNavegacao} navegacao={navegacao} /> : 
            <div className="flex flex-1 w-full items-start gap-16 px-12 pt-8">
              <FormularioEMapa />
            </div>
        }
      </div>
    </div>
  );
}
