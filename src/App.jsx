import {useEffect, useState} from "react";
import ListaDesembarques from "./components/ListaDesembarques";
import { sanitizeText } from "./utils/sanitize";

function App() {
  const [desembarques, setDesembarques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filtro, setFiltro] = useState("");
  const [prioritarios, setPrioritarios] = useState([]);


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
  
  useEffect (() => {
    const guardados = localStorage.getItem("prioritarios");

    if (guardados) {
      setPrioritarios(JSON.parse(guardados));
    }
  }, []);

  if (loading) {
    return <p>Cargando desembarques...</p>
          }

  if (error){ 
    return <p>Error: {error}</p>
  }

  const togglePrioritario = (id) => {
  setPrioritarios((prev) => {
    const existe = prev.includes(id);

    let nuevos;

    if (existe) {
      nuevos = prev.filter((item) => item !== id);
    } else {
      nuevos = [...prev, id];
    }

    localStorage.setItem("prioritarios", JSON.stringify(nuevos));

    return nuevos;
  });
};

  const desembarquesFiltrados = desembarques.filter((item) => {
    const texto = sanitizeText(filtro);

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
      <ListaDesembarques
        desembarques={desembarquesFiltrados}
        prioritarios={prioritarios}
        togglePrioritario={togglePrioritario}
      />
    </>
  );
}

export default App
