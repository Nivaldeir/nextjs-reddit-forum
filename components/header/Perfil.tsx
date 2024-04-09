import { LogOut, Settings, SunMoon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const Perfil = () => {
  return (
    <div className="w-full items-center gap-4 flex flex-col">
      <Link
        href={"#"}
        className="flex w-full gap-2 items-center cursor-pointer"
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-sm font-bold">Ver perfil</h1>
          <p className="text-[12px] text-zinc-500">@vaas</p>
        </div>
      </Link>
      <Link
        href={"#"}
        className="flex w-full gap-2 items-center cursor-pointer"
      >
        <SunMoon size={30} />
        <h1 className="text-sm font-bold">Modo escuro</h1>
      </Link>
      <Link
        href={"#"}
        className="flex w-full gap-2 items-center cursor-pointer"
      >
        <LogOut size={26} />
        <h1 className="text-sm font-bold">Sair</h1>
      </Link>
      <div className="w-full h-[1px] bg-zinc-300" />
      <Link
        href={"#"}
        className="flex w-full gap-2 items-center cursor-pointer"
      >
        <Settings size={26} />
        <h1 className="text-sm font-bold">Configuração</h1>
      </Link>
    </div>
  );
};
export default Perfil;
