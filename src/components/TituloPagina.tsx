export default function TituloPagina({navegacao}: {navegacao: number}) {
    return <div className="flex flex-col items-center">
        <div className={`font-bold cursor-default ${navegacao == 0 ? 'text-5xl' : 'text-xl pt-2'}`}>
            {
                navegacao == 0 ? 'TicketPark Arraial' : 'Encontre o local perfeito para você !'
            }
        </div>
    </div>
}