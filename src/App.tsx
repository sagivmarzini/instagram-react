import React, { useEffect, useState } from "react";
import { PostType, StoryType } from "./utils/types";
import BottomNav from "./Components/Navigation/BottomNavigation";
import TopNavigation from "./Components/Navigation/TopNavigation";
import StoriesSection from "./Components/Stories/StoriesSection";
import Post from "./Components/Post";
import { formatDate } from "./utils/utils";

const App: React.FC = () => {
  const [stories, setStories] = useState<StoryType[]>([
    {
      id: "1",
      username: "Your Story",
      imageUrl: "https://randomuser.me/api/portraits/men/44.jpg",
      isOwn: true,
    },
    {
      id: "69",
      username: "johanna",
      imageUrl: "https://randomuser.me/api/portraits/women/11.jpg",
      isOwn: false,
    },
    // Add more stories here
  ]);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetchMovie();
  }, []);

  async function fetchMovie() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjUzYTg4MDlmYzIzNWVkZjM1MDhhNmY5MjM1MzQ0MiIsIm5iZiI6MTcyOTk2OTE4MS4yMDg2MjIsInN1YiI6IjY3MWQzYjZhMzRjMGZhYmQ2ODFjYzU1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nvyp99UPGZQnuxWUQT2ozBgxKi5EjKqaPLG9GhVZyI4",
      },
    };

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      );
      const data = await response.json();
      console.log(data.results);

      setPosts(([prevPosts]) => [
        ...[prevPosts],
        ...data.results.map((movie: any) => ({
          id: movie.id,
          username: "The Movie Database",
          userImageUrl:
            "https://play-lh.googleusercontent.com/ZVuzhksT-SVMPRRG_QiAurxc0Ex800HkKPRH6uFMW-akgB1Rmp11v3SuR67LklNlCA",
          location: movie.title,
          isVerified: true,
          images: [
            `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
          ],
          likes: {
            count: movie.popularity,
            previewUser: {
              username: "someone",
              imageUrl: `https://randomuser.me/api/portraits/${
                Math.random() < 0.5 ? "men" : "women"
              }/${Math.floor(Math.random() * 99) + 1}.jpg`,
            },
          },
          caption: movie.overview,
          timestamp: formatDate(movie.release_date),
        })),
      ]);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <main className="relative bg-white max-w-[500px] h-[90vh] box-border rounded-xl shadow-xl overflow-hidden flex flex-col">
      <TopNavigation />
      <div className="w-full h-[2px] bg-gray-100" />
      <div className="overflow-y-auto flex-grow pb-24 no-scrollbar">
        <StoriesSection stories={stories} />
        {posts.map((post) => post && <Post key={post.id} {...post} />)}
      </div>
      <BottomNav userImageUrl={stories[0].imageUrl} />
    </main>
  );
};

export default App;
