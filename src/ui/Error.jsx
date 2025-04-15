import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);

  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <h1 className="text-5xl font-bold">Something went wrong 😢</h1>
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
        className="inline-block cursor-pointer rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed md:px-6 md:py-4"
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
