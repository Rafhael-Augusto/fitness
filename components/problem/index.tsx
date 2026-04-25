export function Problem() {
  return (
    <section>
      <h2 className="text-center text-2xl">
        Se sente desorganizado na hora do treino?
      </h2>

      <ul className="flex flex-col gap-2 text-muted-foreground mt-4 mb-16 text-sm px-2 list-disc pl-8">
        <li>
          Treinar sem organização faz você{" "}
          <span className="underline">perder consistência</span> .
        </li>
        <li>
          Vídeos espalhados, anotações soltas e{" "}
          <span className="underline">nada centralizado</span>.
        </li>
        <li>
          É <span className="underline">fácil esquecer</span> cargas, repetições
          e progresso.
        </li>
        <li>
          Cronometrar descanso no celular vira{" "}
          <span className="underline">distração</span>.
        </li>
        <li>
          Sem histórico, fica difícil saber se você{" "}
          <span className="underline">realmente evoluiu</span>.
        </li>
      </ul>
    </section>
  );
}
