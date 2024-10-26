import { Home, Search, PlusSquare, Heart } from "lucide-react";

const BottomNav: React.FC<{ userImageUrl: string }> = ({ userImageUrl }) => (
  <nav className="flex justify-around bg-gray-50 py-5 border-t-gray-200 border-t w-full fixed bottom-0 left-0 right-0">
    <button>
      <Home className="h-8 w-8" />
    </button>
    <button>
      <Search className="h-8 w-8" />
    </button>
    <button>
      <PlusSquare className="h-8 w-8" />
    </button>
    <button>
      <Heart className="h-8 w-8" />
    </button>
    <button>
      <img className="h-9 w-9 rounded-full" src={userImageUrl} alt="Profile" />
    </button>
  </nav>
);

export default BottomNav;
