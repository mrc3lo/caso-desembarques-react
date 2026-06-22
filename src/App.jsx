import {useEffect, useState} from "react";
import ListaDesembarques from "./components/ListaDesembarques";

function App() {
  const [desembarques, setDesembarques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filtro, setFiltro] = useState("");


  useEffect (() => {
      async function obtenerDesembarques() {
        try {
          const response = await fetch(import.meta.env.VITE_API_URL);

          if (!response.ok){
            throw new Error("No fue posible obtener los desembarques")
          }

          const datos = await response.json();
          setDesembarques(datos);

        } catch (err) {
            setError(err.message);

        } finally {
          setLoading(false)
        }
      }
      obtenerDesembarques();
    }, []);

  if (loading) {
    return <p>Cargando desembarques...</p>
          }

  if (error){ 
    return <p>Error: {error}</p>
  }

  const desembarquesFiltrados = desembarques.filter((item) => {
    const texto = filtro.toLowerCase().trim();

    return (
      item.especie?.toLowerCase().includes(texto) ||
      item.estado?.toLowerCase().includes(texto)
    );
});

  return (
    <>
      <h1>Panel de Embarques</h1>

      <input
        type="text"
        placeholder="Filtrar por especie o estado..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ListaDesembarques desembarques = {desembarquesFiltrados}/>
    </>
  );
}

export default App
