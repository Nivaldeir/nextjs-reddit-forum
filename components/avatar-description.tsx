"use client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { ptBR, tr } from "date-fns/locale";
import Link from "next/link";
import { useState } from "react";

interface AvatarDescription {
  name: string;
  date: Date;
  aligth?: boolean;
}
const AvatarDescription = ({ date, name, aligth }: AvatarDescription) => {
  const [showDetails, setShowDetails] = useState(false);
  const formattedDate = formatDistanceToNow(date ? date : new Date(), {
    addSuffix: true,
    locale: ptBR,
    includeSeconds: true,
  });
  return (
    <Link href={"/user"}>
      <div className="flex gap-4">
        <Avatar style={{ width: 30, height: 30 }}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className={`${aligth && "flex items-center gap-2"}`}>
          <h1 className="font-bold text-sm text-black">{name}</h1>
          {aligth && <strong className="text-[10px]">•</strong>}
          <p
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
            className="text-[10px] text-[#808080] relative cursor-auto"
          >
            {formattedDate}
            {showDetails && (
              <div className="absolute text-[10px] bg-zinc-200 p-0.5 rounded-sm top-[-15px] right-[-50px]">
                {date.toLocaleString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default AvatarDescription;
