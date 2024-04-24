import { Star } from "lucide-react";
import { Avatar, AvatarImage } from "~/components/ui/avatar";

export const AvatarGroup = () => {
  return (
    <div className="flex flex-row">
      <div className="mr-4 flex -space-x-3 *:ring-2 *:ring-white">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <Avatar>
          <AvatarImage src="https://xsgames.co/randomusers/avatar.php?g=male" />
        </Avatar>
        <Avatar>
          <AvatarImage src="https://preview.redd.it/new-gpt-super-avatar-creator-upload-3-selfies-and-get-v0-veruy5hcsidc1.jpg?width=1024&format=pjpg&auto=webp&s=c2d20b635ccc9874ef87e385b6d20fdbdae4e849" />
        </Avatar>
        <Avatar>
          <AvatarImage src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        </Avatar>
        <Avatar>
          <AvatarImage src="https://xsgames.co/randomusers/avatar.php?g=female" />
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
