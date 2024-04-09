"use client";
import {
  ChevronsDown,
  CornerDownRight,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import AvatarDescription from "./avatar-description";
import { useState } from "react";
import Reply from "./reply";
interface IReply {
  username: string;
  date: string;
  reply: string;
}

interface Comment {
  date: string;
  username: string;
  comment: string;
  like: number;
  dislike: number;
  replys: IReply[];
}
interface CommentProps {
  data: Comment;
}
const Comment = ({ data }: CommentProps) => {
  const [isLiked, setIsLiked] = useState<"like" | "dislike" | null>(null);
  const [modal, setModal] = useState(true);

  return (
    <div className="flex flex-col bg-zinc-100 rounded-md">
      <AvatarDescription
        aligth
        name={data.username}
        date={new Date(data.date)}
      />
      <div className="ml-10 flex flex-col border-b-2 ">
        <p className="col-span-11 mb-4">{data.comment}</p>
        <div className="flex justify-between ">
          <div className="flex items-center gap-4 ">
            <div className="flex gap-1 items-center">
              <ThumbsUp
                size={14}
                onClick={() => setIsLiked("like")}
                className={`${
                  isLiked === "like" && "fill-primary"
                } cursor-pointer transition-colors duration-500 hover:fill-primary`}
              />
              <p className="text-sm">{data.like}</p>
            </div>
            <div className="flex gap-1 items-center">
              <ThumbsDown
                size={14}
                onClick={() => setIsLiked("dislike")}
                className={`${
                  isLiked === "dislike" && "fill-primary"
                } cursor-pointer transition duration-500 hover:fill-primary`}
              />
              <p className="text-sm">{data.dislike}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="flex gap-2 items-center cursor-pointer px-4 py-1 rounded-sm transition-colors duration-500 hover:bg-primary hover:text-white"
              onClick={() => setModal(!modal)}
            >
              <ChevronsDown
                size={14}
                className={`transition-transform duration-1000 ${
                  modal ? "rotate-0" : "rotate-180"
                }`}
              />
              <p className="text-sm w-[50px]">
                {modal ? "Ocultar" : "Mostrar"}
              </p>
            </div>
            <div className="flex gap-2 items-center cursor-pointer px-4 py-1 rounded-sm transition-colors duration-500 hover:bg-primary hover:text-white">
              <CornerDownRight size={14} />
              <p className="text-sm">Responder</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden max-h-screen ${
          !modal ? "animate-fadeOutVisibility" : "animate-fadeInVisibility"
        } 
        `}
      >
        {data.replys.map((replys, index) => {
          if (!replys) return <div className="p-0" />;
          return (
            <Reply
              key={new Date().toTimeString() + index}
              data={replys}
              username={data.username}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
