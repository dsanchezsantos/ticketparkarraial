import Image from "next/image";
import FotoDeFundo from '../assets/backgroundImage.jpg'

export default function BackgroundImage() {
    return <Image src={FotoDeFundo} alt="Imagem de fundo" fill={true} objectFit="cover" className="opacity-40"/>
}