import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Textarea } from "./ui/textarea";

export const Message = () => {
  return (
    <div className="flex gap-2 cursor-pointer hover:bg-zinc-200 p-2 rounded-sm">
      <div className="relative">
        <Avatar style={{ width: 40, height: 40 }}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute h-[10px] w-[10px] bg-green-500 rounded-full right-0 bottom-[2px]" />
      </div>
      <div className="w-full ">
        <div className="flex justify-between overflow-hidden h-5">
          <p className="text-sm truncate w-[80%]">Username dasdawdadadadsa</p>
          <p className="text-[12px] w-[40%] ">5 de abri.</p>
        </div>
        <p className="text-[12px] truncate">Olá tudo bem?</p>
      </div>
    </div>
  );
};
