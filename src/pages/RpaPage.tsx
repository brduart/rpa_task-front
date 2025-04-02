import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { rpaService } from "@/service/rpaService";
import { useEffect, useRef, useState } from "react";
import { Loader } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { configDate, refreshData, refreshMessage } from "@/utils/rpaUtils";
import { seleniumService } from "@/service/seleniumService";

const RpaPage = () => {
  const { id } = useParams();

  //RPA DATA FROM API
  const [actualRpa, setActualRpa] = useState();
  //LOADING STATE
  const [loading, setLoading] = useState(false);
  //TOGGLE MODAL
  const [open, setOpen] = useState(false);
  //MESSAGE TO RPA
  const [message, setMessage] = useState("");
  //RPA STATUS DATA
  const [status, setStatus] = useState(null);
  //RPA DATA INIT
  const [dataInit, setDataInit] = useState(null);
  //RPA DATA FINAL
  const [dataFinal, setDataFinal] = useState(null);

  //REFS
  const msgRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const initDataRef = useRef<HTMLSpanElement>(null);
  const finalDataRef = useRef<HTMLSpanElement>(null);

  //FETCH ALL DATA FROM ACTUAL RPA
  const fetchRpa = async () => {
    const response = await rpaService.getRpaById(id);
    setActualRpa(response);
  };

  //INIT ACTUAL TEST
  const initTest = async () => {
    try {
      setLoading(true);
      setDataInit(configDate());
      const response = await seleniumService.initTest(id);
      alert(response.message);
      setStatus(response.status);
      setDataFinal(configDate());
      setLoading(false);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const sendRpaResult = async () => {
    const saveData = await rpaService.editData(id, status, dataInit, dataFinal);
  };

  //CLOSE THE MODAL AND SEND THE MESSAGE TO API
  const closeModalAndSendMessage = async () => {
    try {
      const response = await rpaService.addMessage(id, message);
      console.log(response);
      alert(response);
      refreshMessage(msgRef, message);
    } catch (error) {
      alert(error);
    } finally {
      //CLOSE MODAL
      setOpen(!open);
    }
  };

  //LOAD RPA DATA WHEN PAGE LOAD
  useEffect(() => {
    fetchRpa();
  }, []);

  //REFRESH STATUS
  useEffect(() => {
    sendRpaResult();
    refreshData(
      statusRef,
      initDataRef,
      finalDataRef,
      status,
      dataInit,
      dataFinal
    );
  }, [status]);

  return (
    <div className="flex-col h-[85vh] w-[80%] flex items-center justify-center">
      <div className="flex-1 w-full flex items-center justify-center ">
        <div className=" flex-1">
          <h2 className="text-white text-3xl font-bold">
            {actualRpa?.nome_rpa}
          </h2>
          <p className="text-white">
            Agendado para{" "}
            <span className="font-bold">{actualRpa?.data_hora_agendada}</span>
          </p>
        </div>
        <div className=" flex-1 text-end">
          <Button
            className="p-8 bg-[#34BA78] hover:bg-[#40DD90] cursor-pointer"
            onClick={initTest}
          >
            {loading ? (
              <Loader className="animate-spin w-12 h-12 text-white" />
            ) : (
              "Iniciar teste"
            )}
          </Button>
        </div>
      </div>
      <div className=" flex-1/2 w-full  flex flex-col">
        <div className=" flex-1 text-[1.2rem] text-white">
          <p>
            Criado por:{" "}
            <span className="font-bold">{actualRpa?.user.name}</span>
          </p>
          <p className="mt-2">
            Status:{" "}
            <span className="font-bold" ref={statusRef}>
              {actualRpa?.status}
            </span>
          </p>
          <p className="mt-2">
            Data de inicio:{" "}
            <span className="font-bold" ref={initDataRef}>
              {actualRpa?.data_hora_inicio === "null"
                ? "Sem informações"
                : actualRpa?.data_hora_inicio}
            </span>
          </p>
          <p className="mt-2">
            Data de finalização:{" "}
            <span className="font-bold" ref={finalDataRef}>
              {actualRpa?.data_hora_finalizacao === "null"
                ? "Sem informações"
                : actualRpa?.data_hora_finalizacao}
            </span>
          </p>
        </div>
        <div className=" flex-1 flex flex-col mb-5">
          <div className=" h-[20%]  flex items-center justify-between">
            <p className="text-white text-[1.2rem]">Mensagem</p>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="cursor-pointer bg-[#34BA78] hover:bg-[#40DD90]">
                  Adicionar mensagem
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#2D3442] flex items-center justify-center flex-col h-[50vh] border-none">
                <DialogHeader className=" p-5">
                  <DialogTitle className="text-white text-center">
                    Adicione uma mensagem
                  </DialogTitle>
                </DialogHeader>
                <div className="w-full h-full ">
                  <textarea
                    className="bg-[#272E3C] w-full h-full text-white p-5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button
                  className="cursor-pointer p-5 px-5 bg-[#34BA78] hover:bg-[#40DD90]"
                  type="submit"
                  onClick={closeModalAndSendMessage}
                >
                  Salvar
                </Button>
              </DialogContent>
            </Dialog>
          </div>
          <div
            className=" flex-1 bg-[#2D3442] p-5 text-[1.2rem] text-white"
            ref={msgRef}
          >
            {actualRpa?.msg_erro === "null" ? "" : actualRpa?.msg_erro}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RpaPage;
