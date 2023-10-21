import React from "react";
import useCounter from "../hooks/useCounter";

const ContadorComponent = () => {
  // Utiliza el custom hook useCounter para obtener el estado y las funciones relacionadas con el contador.
  const { count, sumar, reset, restar } = useCounter(0);

  return (
    <>
      <h3 className="text-center">Contador: {count}</h3>
      <br />
      <div className="text-center">
        {/* Botón para sumar 1 al contador al hacer clic en él. */}
        <button className="btn btn-primary mx-2" onClick={() => sumar(1)}>
          +1
        </button>
        {/* Botón para restablecer el contador a 0 al hacer clic en él. */}
        <button className="btn btn-danger mx-2" onClick={() => reset()}>
          Reset
        </button>
        {/* Botón para restar 1 al contador si el segundo argumento es false al hacer clic en él. */}
        <button
          className="btn btn-primary mx-2"
          onClick={() => restar(1, false)}
        >
          -1
        </button>
      </div>
    </>
  );
};

export default ContadorComponent;
