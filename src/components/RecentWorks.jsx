const recentData = [
  {
    id: 1,
    name: "The Hyperloop Effect - Parivahan: The Global Hyperloop Conference",
    img: "/src/assets/recent1.jpg",
    content:
      "Force Hyperloop proudly represented NIT Trichy at The Global Hyperloop Conference (IIT Madras) on April 20, 2024. The team analyzed Hyperloop’s feasibility in India, addressing challenges like tunnel buckling—proposing geopolymer composites—and optimizing vacuum maintenance with solar-powered pumps. A Chennai-Bangalore track and an economic viability study were also presented. The competition included a poster round, followed by a final jury presentation.",
  },
  {
    id: 2,
    name: "GHC (Global Hyperloop Competition)",
    img: "/src/assets/recent2.jpg",
    content:
      " From 21 February to 24 February 2025, Force Hyperloop proudly represented NIT Trichy at the Global Hyperloop Competition held at IIT Madras. The four-day event brought together the brightest student teams and industry experts from across the country, creating a vibrant platform for innovation in high-speed transportation. Our participation allowed us to showcase our technical expertise, creative design solutions, and strategic problem-solving skills while learning from some of the most influential minds in the hyperloop domain.",
  },
];

const RecentWorks = () => {
  return (
    <div className="flex flex-col my-[3vh] ">
      <h1 className="text-white md:text-xl sm:text-md text-3xl font-bold ">
        RECENT WORK
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {recentData.map((data) => (
          <div
            className="border border-white rounded-xl w-full mx-[1vw] sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden pb-[2vh] flex flex-col"
            key={data.id}
          >
            <img
              src={data.img}
              className="w-full h-auto aspect-video object-cover"
            />
            <div className=" px-[1vw]">
              <h1 className=" text-white text-xl">{data.name}</h1>
              <span className=" text-white text-sm block flex-grow">
                {data.content}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;
