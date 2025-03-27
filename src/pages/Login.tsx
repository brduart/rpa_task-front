import Form from "@/components/Form";
import { authService } from "@/service/authService";
import { useAuthStore } from "@/store/userAuthStore";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { login, token } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { token } = await authService.login(name, password);
      login(token);
      alert("Logado com sucesso");
      navigate("/");
    } catch (error) {
      alert("Erro");
      console.error("Erro ao fazer login:", error);
    }
  };
  return (
    <>
      {token ? (
        <Navigate to={"/"} />
      ) : (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[#2E9268]">
          <div className="container w-full h-full  flex items-center justify-center">
            <div className="w-[25%] h-[65%] p-12 bg-[#272E3C] flex items-center justify-center flex-col shadow-2xl">
              <div className=" h-[20%] w-full mb-10 flex items-center justify-center">
                <img src="./src/assets/logo.png" alt="" className="w-[85%]" />
              </div>
              <Form
                setUsername={setUsername}
                setPassword={setPassword}
                handle={handleLogin}
                button={true}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
