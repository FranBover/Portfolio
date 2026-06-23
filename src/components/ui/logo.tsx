import logo from "../../assets/Logo.png";
export function Logo() {
  return (
    <a href="#" className="group inline-flex items-center gap-2">
      <img
        src={logo}
        alt="Fran Bover"
        className="logo-spin h-12 w-auto rounded-sm will-change-transform"
      />
      {/* si querés texto al lado, agregalo aquí */}
    </a>
  );
}
