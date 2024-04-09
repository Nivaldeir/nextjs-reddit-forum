import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Menu = () => {
  return (
    <div className="flex flex-col mr-4 mt-4  bg-[#F9F9F9] rounded-sm p-2 gap-2 sticky top-20">
      <div className="flex justify-center flex-col items-center gap-2">
        <Avatar style={{ width: 60, height: 60 }}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold">Username</h1>
      </div>
      <div className="w-full h-[.2px] bg-[#D5D5D5] my-4" />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="text-sm">Visualização do perfil</p>
          <p className="text-sm">25</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Impressões da publicação</p>
          <p className="text-sm">25</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
