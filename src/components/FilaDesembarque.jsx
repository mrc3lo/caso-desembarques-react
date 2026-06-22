function FilaDesembarque({ desembarque }) {

  return (

    <tr>

      <td>{desembarque.especie}</td>

      <td>{desembarque.embarcacion}</td>

      <td>{desembarque.fecha}</td>

      <td>{desembarque.kilos}</td>

      <td>{desembarque.estado}</td>

    </tr>

  );

}

export default FilaDesembarque;