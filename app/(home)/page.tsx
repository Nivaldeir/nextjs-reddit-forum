"use client";
import Menu from "@/components/side-bar/Menu";
import Post from "./_components/Post";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
export default function Home() {
  const { data, isLoading, error } = useQuery(
    "feeds",
    () => {
      return axios
        .get("http://localhost:8080/feed")
        .then((response) => response.data);
    },
    {
      retry: 5,
      // refetchOnWindowFocus: true,
      refetchInterval: 5000,
      initialData: [],
    }
  );
  const mutation = useMutation({
    mutationFn: ({ id, params }: { id: string; params: object }) => {
      return axios
        .patch(`http://localhost:8080/feed/${id}`, { ...params })
        .then((response) => response.data);
    },
    onSuccess: (data: any) => {
      console.log(data);
    },
  });
  if (isLoading) {
    return "TESTe";
  }
  if (error) {
    return error;
  }
  return (
    <div className="w-screen">
      <div className="grid-cols-12 grid max-w-[1400px] m-auto justify-between">
        <div className="col-span-2">
          <Menu />
        </div>
        <div className="col-span-8">
          <div className="flex flex-col gap-4 mt-4">
            {data.map((e: any) => (
              <Post key={e.id} data={e} useMutation={mutation} />
            ))}
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
