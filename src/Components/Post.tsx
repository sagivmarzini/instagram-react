import { useState } from "react";
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  SendHorizontal,
} from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import { PostType } from "../utils/types";

const Post: React.FC<PostType> = ({
  username,
  userImageUrl,
  location,
  isVerified,
  images,
  likes,
  caption,
  timestamp,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <section className="post-container">
      <div className="mx-4 flex justify-between py-4">
        <div className="flex gap-4">
          <img
            className="rounded-full h-12 w-12"
            src={userImageUrl}
            alt={username}
          />
          <div>
            <p className="font-bold cursor-pointer hover:underline">
              {username}
              {/* {isVerified && <span className="text-blue-500 ml-1">✓</span>} */}
              {isVerified && (
                <i
                  className="fa-solid fa-certificate ml-1.5"
                  style={{ color: "#2c96ea" }}
                >
                  <i
                    className="fa-solid fa-check fa-2xs relative -translate-x-full p-[4px]"
                    style={{ color: "white" }}
                  ></i>
                </i>
              )}
            </p>
            <p className="cursor-pointer hover:underline">{location}</p>
          </div>
        </div>
        <button>
          <MoreHorizontal className="h-6 w-6" />
        </button>
      </div>

      <ImageCarousel images={images} />

      <div className="flex justify-between items-center mx-4 my-6">
        <div className="flex gap-5">
          <button onClick={() => setIsLiked(!isLiked)}>
            <Heart
              className={`h-8 w-8 ${
                isLiked ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </button>
          <button>
            <MessageCircle className="h-8 w-8" />
          </button>
          <button>
            <SendHorizontal className="h-8 w-8" />
          </button>
        </div>
        <button onClick={() => setIsSaved(!isSaved)}>
          <Bookmark className={`h-8 w-8 ${isSaved ? "fill-black" : ""}`} />
        </button>
      </div>

      <div className="mx-4">
        <div className="flex items-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src={likes.previewUser.imageUrl}
            alt={likes.previewUser.username}
          />
          <p>
            Liked by{" "}
            <strong className="cursor-pointer hover:underline">
              {likes.previewUser.username}
            </strong>{" "}
            and
            <strong className="cursor-pointer hover:underline">
              {" "}
              {likes.count.toLocaleString()} others
            </strong>
          </p>
        </div>
        <div className="my-2">
          <div className="comment">
            <strong className="cursor-pointer hover:underline">
              {username}
            </strong>{" "}
            {caption}
          </div>
        </div>
      </div>
      <div className="mx-4 my-4 text-gray-400 text-sm">{timestamp}</div>
    </section>
  );
};

export default Post;
