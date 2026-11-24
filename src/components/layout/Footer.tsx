export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-background">
      <div className="page-container py-10">
        <p className="text-center text-xs text-muted-foreground">
          © {year} Dev Sam. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
