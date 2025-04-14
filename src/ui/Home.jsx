import pizza from "../assets/pizza.png";
import ellipse from "../assets/Ellipse.png";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

export default function Home() {
  const username = useSelector((state) => state.user.name);

  return (
    <div className="absolute top-0 left-0 -z-1 flex h-screen max-h-screen w-full max-w-full overflow-hidden">
      <div className="absolute top-1/2 left-[148px] flex -translate-y-1/2 flex-col gap-10 2xl:left-[13.75vw]">
        <h1 className="text-5xl font-bold text-gray-900 2xl:text-[3.75vw]">
          Peça sua pizza agora!
        </h1>
        <p className="ml-1 text-xl text-gray-900 2xl:text-xl">
          Seja bem vindo! Por favor, informe seu nome:
        </p>
        {username ? (
          <span>
            <Button type="primary" to={"/menu"}>
              Continue ordering
            </Button>
          </span>
        ) : (
          <CreateUser />
        )}
      </div>

      <img
        src={pizza}
        alt=""
        style={{ filter: "drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.6))" }}
        className="slow-spin absolute top-1/2 z-10 -translate-y-1/2 rounded-[50%] xl:right-[2.5vw] 2xl:right-[2.5vw] 2xl:w-[40vw]"
      />

      <img
        src={ellipse}
        alt=""
        className="absolute top-0 right-0 h-screen w-[25vw]"
      />
    </div>
  );
}
