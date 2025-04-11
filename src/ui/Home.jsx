import pizza from "../assets/pizza.png";
import ellipse from "../assets/Ellipse.png";

export default function Home() {
  return (
    <div className="flex max-w-full w-full h-screen max-h-screen overflow-hidden absolute top-0 left-0 -z-1">
      <div className="flex flex-col gap-10 absolute top-1/2 -translate-y-1/2 left-[148px] 2xl:left-[264px]">
        <h1 className="text-5xl font-bold text-gray-900 2xl:text-7xl">
          Peça sua pizza agora!
        </h1>
        <p className="ml-1 text-xl text-gray-900 2xl:text-xl">
          Seja bem vindo! Por favor, informe seu nome:
        </p>
        <input
          type="text"
          placeholder="Seu nome completo..."
          className="flex items-center text-base w-[562px] h-14 border border-[#AE3700] text-black rounded-4xl px-4 focus:ring-2 outline-0 transition-all duration-300 focus:ring-[#AE3700]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 116, 32, 0.25) 0%, rgba(255, 152, 89, 0.25) 100%)",
          }}
        />
      </div>

      <img
        src={pizza}
        alt=""
        style={{ filter: "drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.6))" }}
        className="absolute top-1/2 -translate-y-1/2 2xl:w-[40vw] 2xl:right-[5vw] z-10 slow-spin rounded-[50%] xl:right-[2.5vw]"
      />

      <img
        src={ellipse}
        alt=""
        className="absolute top-0 right-0 h-screen w-[25vw]"
      />
    </div>
  );
}
