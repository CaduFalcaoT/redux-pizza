import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen gap-8 flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold">Algo deu errado 😢</h1>
      {error.status ? (
        <p className="text-4xl font-bold">
          Erro {error.status}
          {": "} {error.statusText}
        </p>
      ) : (
        <p className="text-2xl font-semibold">{error.data || error.message}</p>
      )}

      <button
        onClick={() => navigate(-1)}
        className="px-4 py-3 md:px-6 md:py-4 cursor-pointer inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
      >
        &larr; Voltar
      </button>
    </div>
  );
}

export default Error;
