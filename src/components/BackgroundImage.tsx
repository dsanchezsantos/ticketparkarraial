import Image from "next/image";
import FotoFundo from "../assets/backgroundImage.jpg"

export default function BackgroundImage() {
    return <Image src={FotoFundo} alt="Background Image" fill={true} objectFit="cover" className="opacity-40" />
}
