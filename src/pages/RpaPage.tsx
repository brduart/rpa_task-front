import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

const RpaPage = () => {
  const { id } = useParams();

  return (
    <div className="flex-col h-[85vh] w-[80%] flex items-center justify-center">
      <div className="flex-1 w-full flex items-center justify-center ">
        <div className=" flex-1">
          <h2 className="text-white text-3xl font-bold">RPALOGIN</h2>
          <p className="text-white">
            Agendado para <span className="font-bold">01-01-2025</span>
          </p>
        </div>
        <div className=" flex-1 text-end">
          <Button className="p-8 bg-[#34BA78] hover:bg-[#40DD90] cursor-pointer">
            Iniciar Teste
          </Button>
        </div>
      </div>
      <div className=" flex-1/2 w-full  flex flex-col">
        <div className=" flex-1 text-[1.2rem] text-white">
          <p>
            Criado por: <span className="font-bold">ADMIN</span>
          </p>
          <p className="mt-2">
            Status: <span className="font-bold">ADMIN</span>
          </p>
          <p className="mt-2">
            Data de inicio: <span className="font-bold">ADMIN</span>
          </p>
          <p className="mt-2">
            Autorizados: <span className="font-bold">ADMIN</span>
          </p>
        </div>
        <div className=" flex-1 flex flex-col mb-5">
          <div className=" h-[20%]">
            <p className="text-white text-[1.2rem]">Mensagem</p>
          </div>
          <div className=" flex-1 bg-[#2D3442]"></div>
        </div>
      </div>
    </div>
  );
};

export default RpaPage;
