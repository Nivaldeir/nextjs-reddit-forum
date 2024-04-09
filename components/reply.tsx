"use client";
import AvatarDescription from "./avatar-description";
interface Reply {
  username: string;
  date: string;
  reply: string;
}

interface ReplyProps {
  data: Reply;
  username: string;
}

const Reply = ({ data, username }: ReplyProps) => {
  return (
    <div className="flex flex-col relative ml-14 mt-5 bg-zinc-100 p-2 rounded-md">
      <div>
        <AvatarDescription date={new Date(data.date)} name={data.username} aligth />
      </div>
      <div className="text-[14px]">
        <strong>@{username}</strong>,{data.reply}
      </div>
    </div>
  );
};

export default Reply;
