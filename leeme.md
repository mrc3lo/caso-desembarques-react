# Panel de Desembarques - SPA en React

## 1. Descripción del proyecto

Este proyecto consiste en una aplicación SPA desarrollada en React utilizando Vite.  
El sistema permite visualizar un panel de desembarques pesqueros obtenidos desde una API local, con funcionalidades de filtrado, marcación de elementos prioritarios y persistencia de datos mediante localStorage.

La aplicación simula un panel operativo donde se listan registros de desembarque con información como especie, embarcación, fecha, kilos y estado.

---

## 2. Tecnologías utilizadas

- React
- Vite
- JavaScript (ES6+)
- JSON Server (API local)
- LocalStorage
- CSS básico

---

## 3. R1 - Elementos de React utilizados

### Componentes
- `App.jsx`: componente principal que maneja estados globales, consumo de API y lógica principal.
- `ListaDesembarques.jsx`: componente encargado de renderizar la lista de desembarques.
- `FilaDesembarque.jsx`: componente encargado de mostrar cada registro individual.

### Props
Se utilizan props para la comunicación entre componentes:
- `desembarques`: lista de datos enviada desde App hacia ListaDesembarques.
- `desembarque`: objeto individual enviado hacia FilaDesembarque.
- `prioritarios` y `togglePrioritario`: para manejo de estado compartido.

### Estado (useState)
- `desembarques`: almacena los datos obtenidos desde la API.
- `loading`: controla el estado de carga.
- `error`: almacena errores de la petición.
- `filtro`: almacena el texto ingresado por el usuario.
- `prioritarios`: almacena IDs de elementos marcados como prioritarios.

### Efectos (useEffect)
- Un useEffect se utiliza para consumir la API al iniciar la aplicación.
- Otro useEffect se utiliza para cargar datos desde localStorage.

### JSX
Se utiliza JSX para estructurar la interfaz del panel de desembarques.

### Manejo de eventos
- onChange en el input de filtro.
- onClick en el botón de prioridad (estrella).

---

## 4. R2 - Componentes y renderizado

La aplicación está dividida en componentes reutilizables:

- `App`: componente principal.
- `ListaDesembarques`: renderiza la tabla de datos.
- `FilaDesembarque`: renderiza cada fila individual.

Los datos se renderizan utilizando `.map()` para recorrer el arreglo de desembarques y generar componentes dinámicos.

---

## 5. R3 - Consumo de API

La aplicación consume una API local mediante JSON Server:
http://localhost:3001/desembarques


El consumo se realiza mediante `fetch` dentro de `useEffect` utilizando `async/await`.

Se implementa:
- Manejo de estado de carga (`loading`)
- Manejo de errores (`error`)
- Validación de respuesta HTTP (`response.ok`)

El acceso a la API se realiza mediante variable de entorno:
VITE_API_URL=http://localhost:3001/desembarques


---

## 6. R4 - Persistencia con LocalStorage

Se implementa la funcionalidad de marcar desembarques como prioritarios.

- Se almacenan los IDs en un arreglo.
- Se guardan en `localStorage`.
- Se recuperan al recargar la página.

Esto permite mantener la información persistente entre sesiones.

---

## 7. R5 - Filtro y validación de entrada

Se implementa un sistema de filtrado por:

- Especie
- Estado

El filtro se aplica en tiempo real mediante `.filter()`.

Además, se sanitiza la entrada del usuario utilizando una función personalizada que:
- Convierte texto a minúsculas
- Elimina espacios innecesarios
- Remueve caracteres especiales

---

## 8. R6 - Buenas prácticas de desarrollo seguro

Se aplicaron las siguientes medidas:

- Uso de variable de entorno (`import.meta.env.VITE_API_URL`) para la URL de la API.
- Separación de la lógica de consumo de API en `services/api.js`.
- Sanitización de entradas del usuario.
- Manejo de errores en peticiones HTTP.
- Evitar uso de datos sin procesar directamente en la lógica de filtrado.

---

## 9. R7 - Análisis con SonarLint / SonarQube

Se utilizó SonarLint en Visual Studio Code para el análisis del código.

### Hallazgos identificados:

#### 1. Code Smell - Lógica de API en componente principal
- Problema: El consumo de la API estaba inicialmente en `App.jsx`.
- Corrección: Se trasladó a `services/api.js` para mejorar la separación de responsabilidades.

#### 2. Code Smell - Entrada de usuario sin sanitización
- Problema: El valor del input se utilizaba directamente en el filtro.
- Corrección: Se implementó la función `sanitizeText()` para limpiar la entrada antes de procesarla.

---

## 10. Conclusión

El proyecto implementa una SPA funcional en React, aplicando conceptos fundamentales como componentes, props, hooks, consumo de API, persistencia de datos y buenas prácticas de desarrollo.

Se logró una arquitectura modular, escalable y segura, cumpliendo con todos los requerimientos solicitados en la evaluación.