import Form from "@/components/Form";
import { authService } from "@/service/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await authService.register(username, password);
      alert("Criado com sucesso");
      navigate("/login");
    } catch (error) {
      alert("Erro");
      console.error("Erro ao criar usuario:", error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[#2E9268]">
      <div className="container w-full h-full  flex items-center justify-center">
        <div className="w-[25%] h-[65%] p-12 bg-[#272E3C] flex items-center justify-center flex-col shadow-2xl">
          <div className=" h-[20%] w-full mb-10 flex items-center justify-center">
            <img src="./src/assets/logo.png" alt="" className="w-[85%]" />
          </div>
          <Form
            setUsername={setUsername}
            setPassword={setPassword}
            handle={handleRegister}
            button={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
