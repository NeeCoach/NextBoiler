import { Star } from "lucide-react";
import { Avatar, AvatarImage } from "~/components/ui/avatar";

export const AvatarGroup = () => {
  return (
    <div className="flex flex-row">
      <div className="mr-4 flex -space-x-3 *:ring-2 *:ring-white">
        <Avatar>
          <AvatarImage src="assets/avatar3.png" />
        </Avatar>
        <Avatar>
          <AvatarImage src={"assets/avatar2.png"} />
        </Avatar>
        <Avatar>
          <AvatarImage src="assets/avatar5.png" />
        </Avatar>
        <Avatar>
          <AvatarImage src="assets/avatar6.png" />
        </Avatar>
        <Avatar>
          <AvatarImage src={"assets/avatar1.png"} />
        </Avatar>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              fill="#ebb305"
              stroke="#ebb305"
              className="h-4 w-4"
            />
          ))}
        </div>
        <div className="text-base">
          <span className="font-bold">138</span> Fakers shaping perfection!
        </div>
      </div>
    </div>
  );
};
