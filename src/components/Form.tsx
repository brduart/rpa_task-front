import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Form = ({ setUsername, setPassword, handle, button }) => {
  return (
    <form
      onSubmit={handle}
      className="flex justify-center items-center flex-col w-full"
    >
      <div className="mb-3 w-full">
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Nome de usuário"
          type="text"
          className="bg-[#384455] w-full p-2 text-white font-light"
          id="email"
        />
      </div>
      <div className="mb-3 w-full mt-2">
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Senha"
          type="password"
          className="bg-[#384455] w-full p-2 text-white font-light"
          id="password"
        />
      </div>
      <Button className="mt-3 p-6 w-[55%] bg-[#34BA78] hover:bg-[#40DD90] cursor-pointer text-white font-bold">
        {button ? "Entrar" : "Criar conta"}
      </Button>
      <p style={{ marginTop: "2vh" }}>
        {button ? (
          <Link to={"/register"} className="text-white text-[13px]">
            Criar conta
          </Link>
        ) : (
          <Link to={"/login"} className="text-white text-[13px]">
            Login
          </Link>
        )}
      </p>
    </form>
  );
};

export default Form;
