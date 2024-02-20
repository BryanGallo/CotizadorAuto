import { createContext, useState } from "react";
import { obtenerDiferenciaYear } from "../helpers/index.js";

const CotizadorContext = createContext();
const CotizadorProvider = ({ children }) => {
    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",
    });
    const [error, setError] = useState("");
    const handleChangeDatos = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    const cotizarSeguro = () => {
        // Base
        let resultado = 2000;
        //Diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year);
        console.log(diferencia);
        //Hay que restar el 3% por cada año de diferencia
        resultado -= (diferencia * 3 * resultado) / 100;
        console.log(resultado);
        // Americano incremente 15%
        // Europeo incremente 30%
        // Asiatico incremente 5%

        //Basico 20%
        //Completo 50%
    };

    return (
        <CotizadorContext.Provider
            value={{ handleChangeDatos, datos, error, setError, cotizarSeguro }}
        >
            {children}
        </CotizadorContext.Provider>
    );
};

export { CotizadorProvider };

export default CotizadorContext;
