const navData = [
  { id: 1, name: "Home", target: "#home" },
  { id: 2, name: "About Us", target: "#about" },
  { id: 3, name: "Recent Works", target: "#recent" },
];

const NavBar = () => {
  return (
    <div className="w-fit mx-auto mt-5 ">
      <nav className="py-[1.5vh] px-[1vw] flex justify-center gap-[1.3vw] border border-white rounded-xl">
        {navData.map((data) => (
          <a
            href={data.target}
            key={data.id}
            className="text-white font-semibold hover:text-blue-500 transition italic font-mono hover:text-lg duration-500 hover:underline"
          >
            {data.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
