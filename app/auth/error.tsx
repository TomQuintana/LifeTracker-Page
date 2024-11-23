// pages/auth/error.tsx
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  const { error } = router.query;  // Accede al error a través de la URL

  return (
    <div>
      <h1>Ha ocurrido un error</h1>
      {error && <p>Detalles del error: {error}</p>}
      <p>No pudimos completar tu solicitud. Por favor, intenta de nuevo.</p>
    </div>
  );
};

export default ErrorPage;
