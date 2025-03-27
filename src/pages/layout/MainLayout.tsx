import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/userAuthStore";
import { ChildrenType } from "@/types/ChildrenType";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }: ChildrenType) => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  return (
    <div className="bg-[#272E3C] w-[100vw] h-[100vh]">
      <header className="p-4 bg-[#287D59] flex items-center justify-center">
        <div className="container flex">
          <div className=" flex-1">
            <img
              className="cursor-pointer"
              src="./src/assets/home-logo.png"
              alt=""
              onClick={() => navigate("/")}
            />
          </div>
          <div className=" flex-2 flex items-center justify-end">
            <p className="mr-10 text-white">Bem vindo</p>
            <Button
              onClick={logout}
              className="px-10 bg-[#34BA78] hover:bg-[#40DD90] cursor-pointer"
            >
              Sair
            </Button>
          </div>
        </div>
      </header>
      <main className="flex items-center justify-center">{children}</main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
