import { StoryType } from "../../utils/types";

const StoryItem: React.FC<StoryType> = ({ username, imageUrl, isOwn }) => (
  <div className="flex flex-col items-center gap-1 w-24 shrink-0">
    <div className="p-1 bg-gradient-to-tr from-yellow-400 via-purple-600 to-red-500 rounded-full inline-block cursor-pointer">
      <img
        className="w-24 rounded-full p-0.5 bg-white aspect-square object-cover"
        src={imageUrl}
        alt={`${username}'s story`}
      />
    </div>
    <p className="text-sm">{isOwn ? "Your Story" : username}</p>
  </div>
);

export default StoryItem;
