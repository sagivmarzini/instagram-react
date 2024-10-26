import { StoryType } from "../../utils/types";
import StoryItem from "./Story";

const StoriesSection: React.FC<{ stories: StoryType[] }> = ({ stories }) => (
  <section className="p-4 flex py-3 gap-5 overflow-x-auto w-auto flex-nowrap no-scrollbar border-b-2 border-b-gray-100">
    {stories.map((story) => (
      <StoryItem key={story.id} {...story} />
    ))}
  </section>
);

export default StoriesSection;
