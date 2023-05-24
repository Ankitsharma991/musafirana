import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { shuffle } from "lodash";

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
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);
  return (
    <div className="flex-grow ">
      <header className="absolute top-5 right-8">
        <div className="flex bg-red-300 items-center  space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full  h-10 w-10"
            src={
              session?.user
                ? session?.user.image
                : "https://pbs.twimg.com/profile_images/1204434794643374080/XqN0e5n5_400x400.jpg"
            }
            alt="UserImage"
          />
          <h2>{session?.user ? session?.user.name : "Ankit Sharma"}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex items-end  space-x-7 bg-gradient-to-b to-black ${color} text-white h-80`}
      >
        <h1>Hello</h1>
      </section>
    </div>
  );
}

export default Center;
