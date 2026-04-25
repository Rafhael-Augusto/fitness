export function Footer() {
  return (
    <footer className=" border-t">
      <div className="text-center">
        <h4 className="font-semibold">Fitness</h4>

        <ul className="flex items-center justify-center gap-8 text-sm md:text-base lg:text-lg text-muted-foreground underline">
          <li>
            <a
              target="_blank"
              href={"https://www.linkedin.com/in/rafhael-augusto/"}
            >
              Linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href={""}>
              Github
            </a>
          </li>
        </ul>

        <p className="text-xs md:text-sm text-muted-foreground">
          © 2026 Fitness. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
