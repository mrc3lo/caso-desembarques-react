const API_URL = import.meta.env.VITE_API_URL;

export async function getDesembarques() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener desembarques");
  }

  return await response.json();
}