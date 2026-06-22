import {useEffect, useState} from "react";
import ListaDesembarques from "./components/ListaDesembarques";

function App() {
  const [desembarques, setDesembarques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect (() => {
      async function obtenerDesembarques() {
        try {
          const response = await fetch(import.meta.env.VITE_API_URL);

          if (!response.ok){
            throw new Error("No fue posible obtener los desembarques")
          }

          const datos = await response.json();
          setDesembarques(datos);

          if (loading) {
            return <p>Cargando desembarques...</p>
          }

          if (error){ return <p>Error: {error}</p>}

        } catch (error) {
            setError(error.message);

        } finally {
          setLoading(false)
        }
      }
      obtenerDesembarques();
    }, []);

  return (
    <>
      <h1> Panel de Embarques </h1>
      <ListaDesembarques desembarques = {desembarques}/>
    </>
  );
}

export default App
