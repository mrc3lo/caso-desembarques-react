import FilaDesembarque from "./FilaDesembarque";

function ListaDesembarques({ desembarques, prioritarios, togglePrioritario }) {

  return (

    <table border="1">

      <thead>

        <tr>
          <th>Especie</th>
          <th>Embarcación</th>
          <th>Fecha</th>
          <th>Kilos</th>
          <th>Estado</th>
          <th>Es Prioritario</th>
        </tr>

      </thead>

      <tbody>

        {
          desembarques.map((item) => (

            <FilaDesembarque
              key={item.id}
              desembarque={item}
              esPrioritario={prioritarios.includes(item.id)}
              togglePrioritario={togglePrioritario}
            />

          ))
        }

      </tbody>

    </table>

  );

}

export default ListaDesembarques;