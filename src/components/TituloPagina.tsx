export default function TituloPagina({navegacao}: {navegacao?: number}) {
    return <div className="flex flex-col items-center">
        <div className={`font-bold cursor-default text-white ${navegacao == 0 ? 'max-sm:text-4xl sm:text-4xl min-md:text-5xl' : 'md:text-xl pt-2'}`}>
            {
                navegacao == 0 ? 'TicketPark Arraial' : 'Encontre o local perfeito para você !'
            }
        </div>
    </div>
}