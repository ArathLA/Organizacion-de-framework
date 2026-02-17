export default function About(): JSX.Element {
  return (
    <div className="card">
      <h3>Estructura del Proyecto</h3>
      <pre>
        {`
src/
 ├── assets/
 ├── components/
 ├── pages/
 ├── App.tsx
 └── main.tsx
`}
      </pre>
    </div>
  );
}
