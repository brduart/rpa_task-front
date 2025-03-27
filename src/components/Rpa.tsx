import { Link, Links, useNavigate } from "react-router-dom";

const Rpa = ({ name, date, status, id }) => {
  const statusRpa = () => {
    if (status == "PENDENTE") {
      return <img src="./src/assets/Ellipse 3.png" alt="" />;
    } else if (status == "FINALIZADO") {
      return <img src="./src/assets/Ellipse 1.png" alt="" />;
    } else {
      return <img src="./src/assets/Ellipse 2.png" alt="" />;
    }
  };

  return (
    <Link
      to={`/rpa/${id}`}
      className=" w-full flex items-center justify-between p-10 cursor-pointer bg-[#2D3442] mb-3"
    >
      <div className=" flex w-[20%] justify-between ">
        <div id="icon" className="flex-1">
          {statusRpa()}
        </div>
        <div className=" flex-1 text-center">
          <h2 className="text-white ">{name}</h2>
        </div>
      </div>
      <div>
        <h2 className="text-white">Agendado para {date}</h2>
      </div>
    </Link>
  );
};

export default Rpa;
