import Header from "./components/Header";
import Slide from "./components/Slide";

const Community = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-white to-gray-100">
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full flex-grow">
        <Slide />
      </div>
    </div>
  );
};

export default Community;
