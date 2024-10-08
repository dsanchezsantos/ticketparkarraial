import { Button } from "@nextui-org/react";
import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

export default function SocialMedia() {
    return (
        <div className="flex w-full items-center justify-center pt-2 pr-1">
            <Button size="sm" variant="light" color="success" className="text-xs" startContent={<IconBrandWhatsapp size={20} color="white"/>} />
            <Link href="https://www.instagram.com/sanchezdiogo/" target="_blank">
                <Button size="sm" variant="light" color="danger" className="text-xs" startContent={<IconBrandInstagram size={20} color="white"/>} />
            </Link>
        </div>
    )
}