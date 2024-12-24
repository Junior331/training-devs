"use client";

import { useState } from "react";
import { StepsProps } from "./@types";

export const Steps = ({
  labels,
  action,
  children,
  labelAction,
  allowNextStep,
}: StepsProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const semPassoAnterior = () => {
    return currentStep === 0;
  };

  const semProximoPasso = () => {
    return currentStep === labels.length - 1;
  };

  const passoAnterior = () => {
    if (semPassoAnterior()) return;
    setCurrentStep(currentStep - 1);
  };

  const proximoPasso = () => {
    if (semProximoPasso()) return;
    setCurrentStep(currentStep + 1);
  };

  const renderizarLabels = () => {
    return (
      <div className="flex gap-4 select-none">
        {labels.map((label, i) => {
          const selecionado = currentStep === i;
          return (
            <div key={i} className="flex items-center gap-2">
              <span
                className={`
                    flex items-center justify-center
                    w-9 h-9 rounded-full
                    ${selecionado ? "bg-white text-black" : "bg-zinc-700 text-zinc-400"}    
                `}
              >
                {i + 1}
              </span>
              <span className={selecionado ? "text-white" : "text-zinc-600"}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  const isNextStep = allowNextStep?.[currentStep] ?? true;

  return (
    <div className="flex-1 flex flex-col gap-10 w-full">
      <div className="self-center">{renderizarLabels()}</div>
      <div>{children[currentStep]}</div>
      <div className="flex justify-between">
        <button
          onClick={passoAnterior}
          className={`
            button
            ${
              semPassoAnterior()
                ? "bg-zinc-400 cursor-not-allowed opacity-50"
                : "bg-zinc-700 hover:bg-zinc-600 text-white"
            }
          `}
          disabled={semPassoAnterior()}
        >
          <span>Anterior</span>
        </button>
        {semProximoPasso() ? (
          <button
            onClick={action}
            disabled={!isNextStep}
            className={`
                button 
                ${
                  !isNextStep
                    ? "bg-zinc-400 cursor-not-allowed opacity-50"
                    : "bg-green-700 hover:bg-green-600 text-white"
                }
            `}
          >
            <span>{labelAction}</span>
          </button>
        ) : (
          <button
            onClick={proximoPasso}
            disabled={!isNextStep || semProximoPasso()}
            className={`
            button
            ${
              !isNextStep || semProximoPasso()
                ? "bg-zinc-400 cursor-not-allowed opacity-50"
                : "bg-green-700 hover:bg-green-600 text-white"
            }
          `}
          >
            <span>Próximo</span>
          </button>
        )}
      </div>
    </div>
  );
};
