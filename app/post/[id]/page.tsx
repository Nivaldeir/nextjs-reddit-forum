"use client";
import AvatarDescription from "@/components/avatar-description";
import Comment from "@/components/comment";
import Menu from "@/components/side-bar/Menu";
import Tag from "@/components/tags";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  AlignEndHorizontal,
  Boxes,
  ChevronDown,
  Send,
  Star,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const db = require("../../../db/db.json");

const PostFeed = () => {
  return (
    <div className="w-screen">
      <div className="grid-cols-12 grid max-w-[1400px] m-auto justify-between">
        <div className="col-span-2">
          <Menu />
        </div>
        <div className="col-span-8">
          <div className="flex flex-col gap-4 mt-4">
            <Feed />
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default PostFeed;

const Feed = () => {
  const [orderBy, setOrderBy] = useState<string | null>(null);
  const [db, setDb] = useState<any[]>(require("../../../db/db.json"));
  const date = new Date();
  date.setMonth(date.getDay() - 10);
  const code = `
  function hello() {
    console.log('Hello, world!');
  }
  `;
  const OrderBy = (type: string | null) => {
    function sortByLikes(commentA: Comment, commentB: Comment): number {
      return commentB.like - commentA.like;
    }

    function sortByDate(commentA: Comment, commentB: Comment): number {
      const dateA = new Date(commentA.date);
      const dateB = new Date(commentB.date);
      return dateA.getTime() - dateB.getTime();
    }

    function sortByRecent(commentA: Comment, commentB: Comment): number {
      const dateA = new Date(commentA.date);
      const dateB = new Date(commentB.date);
      return dateB.getTime() - dateA.getTime();
    }
    switch (type) {
      case "younger":
        setDb(db.sort(sortByDate));
        break;
      case "most_voted":
        setDb(db.sort(sortByLikes));
        break;
      case "recent":
        console.log(type);
        setDb(db.sort(sortByRecent));
        break;
    }
  };
  useEffect(() => {
    OrderBy(orderBy);
  }, [orderBy]);
  useEffect(() => {
    console.log(db);
  }, [db]);
  return (
    <div>
      <div className="mt-5 p-10 bg-white rounded-sm shadow-md">
        <AvatarDescription name="@nivaldeir" date={date} />
        <div className="mt-4 flex flex-col gap-4">
          <h1 className="font-bold text">How to patch KDE on FreeBSD?</h1>
          <p>
            Mi magna sed nec nisl mattis. Magna cursus tincidunt rhoncus
            imperdiet fermentum pretium, pharetra nisl. Euismod.
          </p>
        </div>
        <pre className="bg-zinc-300 rounded-xl">
          <code className="javascript">{code}</code>
        </pre>
        <div className="mt-4">
          <Tag name="javascript" />
        </div>
      </div>
      <div className="mt-4">
        <Suggestions />
      </div>
      <div>
        <DropdownMenu>
          <div className="flex gap-1 items-center my-3">
            <p>Ordenar por:</p>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size={"sm"}>
                <p>Melhores </p>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="font-bold">
                Ordernar por
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem
                  className="flex gap-2"
                  onClick={() => setOrderBy("best")}
                >
                  <Boxes size={12} />
                  <p className="text-sm">Melhores</p>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex gap-2"
                  onClick={() => setOrderBy("most_voted")}
                >
                  <Star size={12} />
                  <p className="text-sm">Mais votados</p>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex gap-2"
                  onClick={() => setOrderBy("recent")}
                >
                  <AlignEndHorizontal size={12} />
                  <p className="text-sm">Mais novos</p>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </div>
        </DropdownMenu>
        <div className="mt-4 flex flex-col gap-8">
          {db.map((comment: any) => (
            <Comment data={comment} key={comment.date} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface SuggestionsPros {}

const Suggestions = ({}: SuggestionsPros) => {
  const [comment, setComment] = useState("");
  const { toast } = useToast();
  const handleSend = () => {
    if (comment.length > 10) {
      toast({
        title: "Enviado",
        variant: "default",
      });
      setComment("");
    } else {
      toast({
        title: "Não permitido",
        description: "Para enviar tem que ter no minimo 10 caracteres",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="bg-white rounded-sm shadow-md w-full">
      <div className="px-3 pt-3">
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Digite aqui sua sábia sugestão"
          className="resize-none "
        />
      </div>
      <div className="flex justify-end p-4">
        <Button
          size={"sm"}
          className="text-[12px] flex gap-2 justify-end"
          onClick={handleSend}
        >
          <Send size={12} />
          Enviar
        </Button>
      </div>
    </div>
  );
};
