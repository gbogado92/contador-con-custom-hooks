import { useState } from "react";

const useCounter = (valorInicial) => {
  // Inicializa el estado 'count' con el valor inicial proporcionado.
  const [count, setCount] = useState(valorInicial);

  // Función para aumentar el contador por un valor específico.
  const sumar = (valor) => {
    setCount(count + valor);
  };

  // Función para restablecer el contador a 0.
  const reset = () => {
    setCount(0);
  };

  // Función para restar un valor específico al contador si el segundo argumento es false y no permite un valor negativo.
  const restar = (valor, negativo) => {
    if (!negativo && count - valor < 0) {
      // Si el resultado sería negativo y no se permite, el contador se establece en 0.
      setCount(0);
      return;
    }
    // De lo contrario, resta el valor del contador.
    setCount(count - valor);
  };

  // Devuelve un objeto con el estado actual y las funciones para interactuar con el contador.
  return {
    count,
    sumar,
    restar,
    reset,
  };
};

export default useCounter;
