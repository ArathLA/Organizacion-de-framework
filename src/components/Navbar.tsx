interface NavbarProps {
  setPage: (page: string) => void;
}

export default function Navbar({ setPage }: NavbarProps): JSX.Element {
  return (
    <nav className="nav">
      <button onClick={() => setPage('home')}>Inicio</button>
      <button onClick={() => setPage('about')}>Estructura</button>
    </nav>
  );
}
