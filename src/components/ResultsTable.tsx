import { formatNumber } from "../lib/utils"


const ResultsTable = ({IMcData,} : {IMcData: {weight : number; height : number; IMC: number; IMCresult: string }}) => {
  return (
    <table className="mx-auto text-neutral-600 w-full ">
    <thead className="bg-zinc-100 text-rose-400 w-full  ">
      <tr className="px-6 py-2">
        <th className="">Peso</th>
        <th>Altura</th>
        <th>IMC</th>
        <th>Resultado</th>
      </tr>
    </thead>
    <tbody className="bg-white text-neutral-600 text-left">
      <tr className="px-6 py-2">
        <td className="text-center">{formatNumber(IMcData.weight, 2)}kg</td>
        <td className="text-center">{formatNumber(IMcData.height * 100, 0)}cm</td>
        <td className="text-center">{formatNumber(IMcData.IMC)}</td>
        <td className="text-center">{IMcData.IMCresult}</td>
      </tr>
    </tbody>
  </table>
  )
}

export default ResultsTable