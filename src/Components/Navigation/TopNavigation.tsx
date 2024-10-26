import { Camera, SendHorizontal } from "lucide-react";

const NavBar: React.FC = () => (
  <nav className="bg-gray-50 flex justify-between px-4 py-6">
    <button>
      <Camera className="h-8 w-8" />
    </button>
    <h1 className="text-xl font-mono font-black cursor-default select-none">
      Instagram
    </h1>
    <button>
      <SendHorizontal className="h-8 w-8" />
    </button>
  </nav>
);

export default NavBar;
