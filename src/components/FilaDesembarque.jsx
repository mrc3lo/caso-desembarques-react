function FilaDesembarque({ desembarque, esPrioritario, togglePrioritario }) {

  return (

    <tr>

      <td>{desembarque.especie}</td>

      <td>{desembarque.embarcacion}</td>

      <td>{desembarque.fecha}</td>

      <td>{desembarque.kilos}</td>

      <td>{desembarque.estado}</td>

      <td>
        <button onClick={() => togglePrioritario(desembarque.id)}>
            {esPrioritario ? "⭐" : "☆"}
        </button>
      </td>

    </tr>

  );

}

export default FilaDesembarque;