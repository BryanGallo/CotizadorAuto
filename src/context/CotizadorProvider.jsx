import { createContext, useState } from "react";
import {
    obtenerDiferenciaYear,
    calcularMarca,
    calcularPlan,
    formatearDinero,
} from "../helpers/index.js";

const CotizadorContext = createContext();
const CotizadorProvider = ({ children }) => {
    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",
    });
    const [error, setError] = useState("");
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);
    const handleChangeDatos = (e) => {
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
        // Europeo incremente 30%
        // Americano incremente 15%
        // Asiatico incremente 5%
        resultado *= calcularMarca(datos.marca);
        console.log(resultado);
        //Basico 20%
        //Completo 50%
        resultado *= calcularPlan(datos.plan);
        console.log(resultado);

        //Formatear Dinero
        resultado = formatearDinero(resultado);
        setCargando(true);
        setTimeout(() => {
            setResultado(resultado);
            setCargando(false);
        }, 3000);
    };

    return (
        <CotizadorContext.Provider
            value={{
                handleChangeDatos,
                datos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando,
            }}
        >
            {children}
        </CotizadorContext.Provider>
    );
};

export { CotizadorProvider };

export default CotizadorContext;
