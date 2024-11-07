import Estacionamentos from "@/utils/interfaces/Estacionamentos";
import { Bairros } from '../utils/enums/Bairros'

export const estacionamentos: Estacionamentos[] = [
    // Praia Grande
    {nome: 'Souza', localizacao: { lat: -22.9726281, lng: -42.0302987  }, bairro: Bairros.PRAIAGRANDE},
    {nome: 'João', localizacao: { lat: -22.9728918, lng: -42.0298005  }, bairro: Bairros.PRAIAGRANDE},
    // Praia dos Anjos
    {nome: 'Manuela', localizacao: { lat: -22.9686289, lng: -42.0202287  }, bairro: Bairros.PRAIADOSANJOS},
    {nome: 'Ricardo', localizacao: { lat: -22.9686536, lng: -42.0203078  }, bairro: Bairros.PRAIADOSANJOS},
    // Prainha
    {nome: 'Pessoa', localizacao: { lat: -22.9621354 , lng: -42.0239364  }, bairro: Bairros.PRAINHA}, 
    {nome: 'Silva', localizacao: { lat: -22.9607289, lng: -42.0250402  }, bairro: Bairros.PRAINHA},
    // Centro
    {nome: 'Gilberto', localizacao: { lat: -22.9689799, lng: -42.0283095  }, bairro: Bairros.CENTRO },
]
