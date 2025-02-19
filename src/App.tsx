import "./App.css";
import Label from "./components/Label";
import Button from "./components/Button";
import Input from "./components/Input";
import RefenceTable from "./components/RefenceTable";
import { calculateIMC, imcResult } from "./lib/IMC";
import React from "react";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [IMcData, setIMCData] = React.useState<null | {
    weight: number;
    height: number;
    IMC: number;
    IMCresult: string;
  }>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // get data from form

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      weight: string;
      height: string;
    };

    // handle empty fields

    const { weight, height } = data;
    if (!weight || !height) {
      alert("Ops.. voce precisa preencha todos os campos");
      return;
    }

    // parce and handle strings to numbers
    const weightNumber = parseFloat(weight.replace(",", "."));
    const heightNumber = parseFloat(height.replace(",", ".")) / 100;

    if (isNaN(weightNumber) || isNaN(heightNumber)) {
      alert("Ops...você precisa preencher os campos com números válidos");
      return;
    }

    // handle invalid numbers

    if (weightNumber < 5 || weightNumber > 500) {
      alert("Ops... você precisa ser maior que 2kg e menor que 500kg");
    }

    if (heightNumber < 0.5 || heightNumber > 2.5) {
      alert("Ops... você precisa ser maior que 50 cm e menor que 2,5m");
    }

    // calculate imc
    const imc = calculateIMC(weightNumber, heightNumber);

    const IMCResult = imcResult(imc);

    console.log(IMCResult);

    //set results

    setIMCData({
      weight: weightNumber,
      height: heightNumber,
      IMC: imc,
      IMCresult: IMCResult,
    });

    //clear form
    e.currentTarget.reset();
  }

  function handleClickReset(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIMCData(null);
  }

  return (
    <main className="bg-white max-w-4xl mx-auto md:py-24 md:px-48 px-10 py-10">
      <section id="form">
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="weight">Peso(kg)</Label>
            <Input
            disabled={!!IMcData}
              type="text"
              name="weight"
              id="weight"
              className="mt-1"
            ></Input>
          </div>
          <div className="mt-4">
            <Label htmlFor="height">Altura(cm)</Label>
            <Input
            disabled={!!IMcData}
              type="text"
              name="height"
              id="height"
              className="mt-1"
            ></Input>
          </div>
          {IMcData ? (
            <Button onClick={handleClickReset}>Refazer</Button>
          ) : (
            <Button typeof="submit">Calcular</Button>
          )}
        </form>
      </section>
      <section id="result" className="py-10 px-4 h-40 ">
        {IMcData ? (
          <div>
            <ResultsTable IMcData={IMcData} />
          </div>
        ) : (
          <p className="text-center text-neutral-400">
            Saiba qual seu peso ideal!
          </p>
        )}
      </section>
      <section id="reference-table">
        <RefenceTable />
      </section>
    </main>
  );
}

export default App;
