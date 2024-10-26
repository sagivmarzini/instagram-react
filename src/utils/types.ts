export type StoryType = {
  id: string;
  username: string;
  imageUrl: string;
  isOwn?: boolean;
};

export type PostType = {
  id: string;
  username: string;
  userImageUrl: string;
  location: string;
  isVerified: boolean;
  images: string[];
  likes: {
    count: number;
    previewUser: {
      username: string;
      imageUrl: string;
    };
  };
  caption: string;
  timestamp: string;
};
