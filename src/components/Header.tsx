import STORMHOLD from '@/assets/STORMHOLD.webp';

const Header = () => {
  return (
    <header
      className="relative bg-cover bg-center parallax z-0"
      style={{ backgroundImage: `url(${STORMHOLD.src})`, height: "100vh" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-200 text-center">
        <h1 className="text-5xl font-bold my-5 animate-fadeInUp">
          Explore the continent of Stormhold
        </h1>
        <p className="text-xl mt-4 font-medium animate-fadeInUp animation-delay-200 text-green-200">
          Dive into a continent of mystery, magic, and intrigue.
        </p>
      </div>
    </header>
  );
};

export default Header;
