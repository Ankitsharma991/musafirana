import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { playlistIdState, playlistState } from "@/atoms/playlistAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import spotifyApi from "@/lib/spotify";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

function Center() {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(()=>{
    spotifyApi.getPlaylist(playlistId).then((data)=>{
      setPlaylist(data.body)
    })
  },[spotifyApi, playlistId])

  return (
    <div className="flex-grow ">
      <header className="absolute top-5 right-8">
        <div className="flex bg-red-300 items-center  space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full  h-10 w-10"
            src={session ? session.user.image : "User Image"}
            alt="UserImage"
          />
          <h2>{session ? session.user.name : "User Name"}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex items-end  space-x-7 bg-gradient-to-b to-black ${color} text-white h-80`}
      ></section>
    </div>
  );
}

export default Center;
