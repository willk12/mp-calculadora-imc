

const RefenceTable = () => {
  return (
    <table className="mx-auto text-neutral-600 text-left md:text-base text-sm">
          <thead className="bg-zinc-100 text-rose-400 ">
            <tr>
              <th className="px-6 py-2">IMC</th>
              <th className="px-6 py-2">Classificação</th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(even)]:bg-zinc-100 &>tr:nth-child(odd)]:bg-white [&>tr>td]:px-6 [&>tr>td]:py-1] ">
            <tr>
              <td>Menor que 18,5</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr>
              <td>18,5 - 24,9</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>25 - 29,9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>30 - 34,9</td>
              <td>Obesidade grau 1</td>
            </tr>
            <tr>
              <td>35 - 39,9</td>
              <td>Obesidade grau 2</td>
            </tr>
            <tr>
              <td>40 ou mais</td>
              <td>Obesidade grau 3</td>
            </tr>
          </tbody>
        </table>
  )
}

export default RefenceTable