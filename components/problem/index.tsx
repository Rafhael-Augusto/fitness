export function Problem() {
  return (
    <section>
      <h2 className="text-center text-2xl">
        Se sente desorganizado na hora do treino?
      </h2>

      <ul className="flex flex-col gap-2 text-muted-foreground mt-4 mb-16 text-sm px-2 list-disc pl-8">
        <li>
          Treinar sem organização faz você{" "}
          <span className="underline">perder</span> consistência.
        </li>
        <li>Vídeos espalhados, anotações soltas e nada centralizado.</li>
        <li>É fácil esquecer cargas, repetições e progresso.</li>
        <li>Cronometrar descanso no celular vira distração.</li>
        <li>Sem histórico, fica difícil saber se você realmente evoluiu.</li>
      </ul>
    </section>
  );
}
