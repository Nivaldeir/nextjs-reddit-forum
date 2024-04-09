"use client";
import { CornerRightUp, Maximize2, Minus, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";
import { Message } from "./message";
import { Textarea } from "./ui/textarea";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "./ui/button";

export const MessagePrivate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closed, setClosed] = useState(true);
  useEffect(() => {}, [isOpen]);
  return (
    <>
      <OpenMessage closed={closed} onClose={() => setClosed(true)} />
      <div className="fixed z-[100] bottom-0 right-2 bg-white p-1 rounded-t-lg  w-[300px] ">
        <div onClick={() => setIsOpen(!isOpen)}>
          <div className="flex items-center justify-between cursor-pointer hover:bg-[#f7f7f7] p-2">
            <Avatar style={{ width: 40, height: 40 }}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Mensagens</p>
            <CornerRightUp
              className={`transition-transform duration-1000 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
        <div
          className={`${isOpen ? "message-effect-up" : "message-effect-down"}`}
        >
          <div className="w-full h-[0.1px] bg-[#D5D5D5] mb-2" />
          <div className="flex flex-col gap-2">
            <div onClick={() => setClosed(false)}>
              <Message />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface OpenMessageProps {
  onClose: Function;
  closed: boolean;
}
const OpenMessage = ({ onClose, closed }: OpenMessageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const formattedDate = formatDistanceToNow(new Date(), {
    addSuffix: true,
    locale: ptBR,
    includeSeconds: true,
  });
  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`fixed z-[200] bottom-0 right-[350px] bg-white p-1 rounded-t-lg  w-[350px]  ${
        closed && "h-0"
      }`}
      style={{
        flex: "none",
      }}
    >
      <div className="flex items-center gap-2 cursor-pointer p-2 justify-between shadow-sm">
        <div
          className="flex items-center gap-2  w-full"
          onClick={toggleMessage}
        >
          <Avatar style={{ width: 30, height: 30 }}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Lucas Vieira</p>
        </div>
        <div className="flex items-center ">
          <div
            className="p-2 hover:bg-[#f7f7f7] rounded-full"
            onClick={() => setIsOpen(true)}
          >
            <Maximize2 className="" />
          </div>
          <div
            className="p-2 hover:bg-[#f7f7f7] rounded-full"
            onClick={() => onClose(true)}
          >
            <X />
          </div>
        </div>
      </div>
      {/* BODY */}
      <div
        className={`max-h-[350px] ${
          isOpen ? "message-effect-up" : "message-effect-down"
        }`}
      >
        <div className="flex flex-col h-[250px] items-end pb-1 overflow-x-auto gap-4">
          <div className="flex gap-2 flex-col ">
            <div className="flex items-center gap-2">
              <Avatar style={{ width: 20, height: 20 }}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>Lucas</p>
              <p className="text-[10px]">- {formattedDate}</p>
            </div>
            <p className="text-sm px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              quidem.
            </p>
          </div>
          <div className="flex gap-2 flex-col ">
            <div className="flex items-center gap-2">
              <Avatar style={{ width: 20, height: 20 }}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>Lucas</p>
              <p className="text-[10px]">- {formattedDate}</p>
            </div>
            <p className="text-sm px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              quidem.
            </p>
          </div>
          <div className="flex gap-2 flex-col ">
            <div className="flex items-center gap-2">
              <Avatar style={{ width: 20, height: 20 }}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>Lucas</p>
              <p className="text-[10px]">- {formattedDate}</p>
            </div>
            <p className="text-sm px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              quidem.
            </p>
          </div>
          <div className="flex gap-2 flex-col ">
            <div className="flex items-center gap-2">
              <Avatar style={{ width: 20, height: 20 }}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>Lucas</p>
              <p className="text-[10px]">- {formattedDate}</p>
            </div>
            <p className="text-sm px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              quidem.
            </p>
          </div>
        </div>
        <div className="p-1">
          <Textarea
            className="min-h-16 h-full"
            placeholder="Envie sua mensagens"
          />
          <div className="flex justify-end mt-2">
            <Button className="h-5 w-16">Enviar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
