import { APIProvider, Map } from "@vis.gl/react-google-maps";
import EstacionametosPins from "./EstacionamentosPins";
import { estacionamentos } from "@/data/estacionamentos";

export default function Mapa() {
    return (
        <div className="flex flex-1 w-full h-full pb-8">
            <APIProvider apiKey={'AIzaSyCEhsni09eUfpnDJFtFjZUblAR-6c9yc4Y'} onLoad={() => console.log('Maps API has loaded.')}>
            <Map
                style={{minWidth: '100%', minHeight: '100%', borderRadius: '24px'}}
                defaultZoom={13}
                defaultCenter={ { lat: -22.9657271, lng: -42.0290065 } }
                mapId="b095d1fa09f0c572"
            >
                <EstacionametosPins estacionamentos={estacionamentos} />
            </Map>
            </APIProvider>
        </div>
    )
}