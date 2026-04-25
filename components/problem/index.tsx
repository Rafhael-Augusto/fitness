export function Problem() {
  return (
    <section>
      <h2 className="text-center text-2xl">
        Se sente desorganizado na hora do treino?
      </h2>

      <ul className="flex flex-col gap-2 text-muted-foreground mt-4 text-sm px-2 list-disc pl-8">
        <li>
          Treinar sem organização faz você{" "}
          <span className="underline">perder</span> consistência.
        </li>
        <li>Vídeos espalhados, anotações soltas, nada conectado.</li>
      </ul>

      <div className="mt-8">
        <h3 className="text-center text-2xl">
          Tudo o que você precisa, de graça.
        </h3>

        <ul className="flex flex-col gap-2 text-muted-foreground mt-4 text-sm px-2 list-disc pl-8">
          <li>Salve links de vídeos para assistir durante o treino.</li>
          <li>Inicie e salve o cronômetro de cada sessão.</li>
          <li>Faça anotações e guarde no seu bloco de notas.</li>
          <li>Tenha um histórico detalhado das suas sessões.</li>
        </ul>

        <span className="text-center block my-4 text-muted-foreground">
          Tudo em um só lugar.
        </span>
      </div>
    </section>
  );
}
