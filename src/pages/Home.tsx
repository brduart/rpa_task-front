import Rpa from "@/components/Rpa";
import { rpaService } from "@/service/rpaService";
import { useEffect, useState } from "react";

const Home = () => {
  const [rpa, setRpa] = useState([]);

  const fetchData = async () => {
    try {
      const response = await rpaService.getAllRpa();
      setRpa(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-[85vh] w-[80%] flex items-center justify-center">
      <div className="container   flex items-center justify-center flex-col">
        <h1 className="text-white text-3xl font-bold w-full p-10">RPA's</h1>
        <div
          className="overflow-y-scroll max-h-[50vh]  mt-3 w-full flex  flex-col p-5  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {rpa.map((item) => (
            <Rpa
              date={item.data_hora_agendada}
              id={item.id}
              name={item.nome_rpa}
              status={item.status}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
