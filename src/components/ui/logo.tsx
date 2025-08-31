import logo from "../../assets/Logo.png";
export function Logo() {
  return (
    <a href="#" className="inline-flex items-center gap-2">
      <img src={logo} alt="Fran Bover" className="h-12 w-auto rounded-sm" />
      {/* si querés texto al lado, agregalo aquí */}
    </a>
  );
}
