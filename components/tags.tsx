interface TagProps {
  name: string;
}
export default function Tag({ name }: TagProps) {
  return (
    <div className="px-[10px] py-[5px] text-sm bg-zinc-300 inline-flex lowercase rounded-md">
      {name}
    </div>
  );
}
