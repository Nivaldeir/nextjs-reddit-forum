"use client";
import AvatarDescription from "@/components/avatar-description";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowBigDown, ArrowBigUp, MessageCircle, Share } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { UseMutationResult } from "react-query";
interface PostProps {
  data: {
    id: string;
    username: string;
    created_at: string;
    title: string;
    body: string;
    like: number;
    dislike: number;
    comments: number;
  };
  useMutation: UseMutationResult<
    any,
    unknown,
    {
      id: string;
      params: object;
    },
    unknown
  >;
}
const Post = ({ data, useMutation }: PostProps) => {
  const [vote, setVote] = useState<{
    last?: string | null;
    current: string | null;
    quantity: number;
  }>({
    last: null,
    current: null,
    quantity: data.like - data.dislike,
  });
  const handleVoted = (value: "dislike" | "like") => {
    if (vote.current === value) {
      console.log(value);
      useMutation.mutate({
        id: data.id,
        params: {
          [value]: data[value] - 1,
        },
      });
      setVote({
        ...vote,
        current: null,
        last: vote.current,
        quantity: data.like - data.dislike,
      });
    } else if (vote.current === null) {
      // Primeiro voto
      setVote({
        ...vote,
        last: value === "dislike" ? "like" : "dislike",
        current: value,
        quantity: vote.quantity + (value === "like" ? 1 : -1),
      });
      useMutation.mutate({
        id: data.id,
        params: {
          [value]: vote.quantity + (value === "like" ? 1 : -1),
        },
      });
      console.log("ULTIMO", vote.quantity + (value === "like" ? 1 : -1));
    } else if (vote.current === "like" && value === "dislike") {
      setVote({
        ...vote,
        last: vote.current,
        current: value,
        quantity: vote.quantity - 2,
      });
      useMutation.mutate({
        id: data.id,
        params: {
          like: data.like - 1,
          dislike: data.dislike + 1,
        },
      });
      console.log("ULTIMO", {
        like: data.like - 1,
        dislike: data.dislike + 1,
      });
    } else {
      setVote({
        ...vote,
        last: vote.current,
        current: value,
        quantity: data[vote.current as "dislike" | "like"] - 1,
      });
      console.log("ULTIMO", {
        [vote.current]: data[vote.current as "dislike" | "like"] - 1,
      });
      useMutation.mutate({
        id: data.id,
        params: {
          [vote.current]: data[vote.current as "dislike" | "like"] - 1,
        },
      });
    }
  };
  return (
    <>
      <div className="cursor-pointer p-3 rounded-md hover:bg-white duration-500">
        <Link href={"/post/123"} className="">
          <div>
            <AvatarDescription
              date={new Date(data.created_at)}
              name={data.username}
              aligth
              key={data.created_at + data.username}
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <h1 className="text-xl font-bold">{data.title}</h1>
            <p className="text-sm">{data.body}</p>
          </div>
        </Link>
        <div className="mt-2 flex gap-5">
          <div
            className={`inline-flex gap-[2px] items-center rounded-full p-1 px-2 ${
              vote == null && "bg-zinc-100"
            } ${vote.current == "like" && "bg-green-500"} ${
              vote.current == "dislike" && "bg-red-500"
            }`}
          >
            <ArrowBigUp
              size={20}
              className="cursor-pointer hover:bg-[#E0E0E0] rounded-full"
              onClick={() => handleVoted("like")}
            />
            <p className="text-sm font-semibold">{vote.quantity}</p>
            <ArrowBigDown
              size={20}
              className="cursor-pointer hover:bg-[#E0E0E0] rounded-full"
              onClick={() => handleVoted("dislike")}
            />
          </div>
          <div
            className={`inline-flex gap-[2px] items-center rounded-full p-1 px-3 bg-zinc-100 hover:bg-[#E0E0E0] cursor-pointer`}
          >
            <MessageCircle size={20} />
            <p className="text-sm font-semibold">{data.comments}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <div className="inline-flex gap-[2px] items-center rounded-full p-1 px-3 bg-zinc-100 hover:bg-[#E0E0E0] cursor-pointer">
                <Share size={18} />
                <p className="text-sm font-semibold">Compartilhar</p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer">
                Copiar link
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="w-full h-[.2px] bg-[#D5D5D5] my-1" />
    </>
  );
};
export default Post;
