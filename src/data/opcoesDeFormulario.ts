 import FormularioOpcoes from "@/utils/interfaces/FormularioOpcoes";

export const opcoesDeFormulario: FormularioOpcoes[] = [
    {label: 'Tipo de reserva', opcoes: [['Diária', 0], ['Pernoite', 1]], node: 0},
    {label: 'Programação do dia', opcoes: [['Fazer um passeio', 2], ['Passar o dia', 3], ['Ainda não decidi', 4]], node: 1},
    {label: 'Qual o passeio ?', opcoes: [['Barco e/ou mergulho', 5], ['Outros', 6]], node: 2},
    {label: 'Sabe localizar o destino ?', opcoes: [['Sim', 7], ['Não', 8]], node: 3},
    {label: 'Bairro de Destino', opcoes: [['Praia Grande', 9], ['Prainha', 10], ['Praia dos Anjos', 11], ['Centro', 12]], node: 4},
]