"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { PlusIcon, Bell, Search, MessageCircleMore } from "lucide-react";
import { Badge } from "../ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Notifications from "./Notification";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Perfil from "./Perfil";
import { Label } from "../ui/label";

const Header = () => {
  return (
      <div className="w-screen py-2 sticky top-0 bg-white border-b-[1px] z-50 border-[#D5D5D5]">
        <div className="max-w-[1400px] m-auto justify-between flex items-center">
          <Link href={"#"} className="flex gap-1 items-center">
            <Image src={"/reddit.svg"} width={40} height={50} alt="Logo" />
            <p className="font-bold text-2xl">reddit</p>
          </Link>
          <div className="w-[40%] relative">
            <div className="flex items-center bg-zinc-400 p-2 rounded-full  gap-2 w-full z-10">
              <Label htmlFor="search">
                <Search size={16} />
              </Label>
              <input
                className="bg-transparent outline-none placeholder:text-black placeholder:font-semibold w-full"
                id="search"
                placeholder="Buscar"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="cursor-pointer hover:bg-slate-100 p-2 rounded-full">
              <MessageCircleMore size={22} />
            </div>
            <Button className="flex gap-2" variant={"ghost"}>
              <PlusIcon size={14} />
              <p className="text-sm">Criar</p>
            </Button>
            <div className="relative">
              <Popover>
                <PopoverTrigger asChild>
                  <div className="cursor-pointer">
                    <Bell size={26} />
                    <Badge className=" absolute top-[-5px] left-4 text-[10px] p-0.5 rounded-full w-4 h-4 justify-center">
                      1
                    </Badge>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="p-2">
                  <Notifications />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="p-4">
                  <Perfil />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Header;
