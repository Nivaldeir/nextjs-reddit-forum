import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

const Notifications = () => {
  return (
    <div className="w-full items-center">
      <p className="text-sm font-bold text-center mb-2">Notificações</p>
      <ScrollArea className="h-72 w-full rounded-md border flex flex-col gap-4">
        {Array.from({ length: 2 }, (e, index) => (
          <div>
            <CardNotification key={index} />
            <Separator className="mt-1 mb-1" />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};
export default Notifications;

const CardNotification = () => {
  return (
    <Link
      href={"#"}
      className="p-2 flex bg-zinc-100 hover:bg-zinc-50 transition-shadow"
    >
      <div className="flex justify-between gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <div>
            <p className="text-sm">Jacson acabou de comentar no seu post</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
