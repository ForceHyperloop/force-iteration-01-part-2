import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const recentData = [
  {
    id: 1,
    name: "The Hyperloop Effect - Parivahan: The Global Hyperloop Conference",
    img: "/src/assets/recent1.jpg",
    content:
      "Force Hyperloop proudly represented NIT Trichy at The Global Hyperloop Conference (IIT Madras) on April 20, 2024. The team analyzed Hyperloop's feasibility in India, addressing challenges like tunnel buckling—proposing geopolymer composites—and optimizing vacuum maintenance with solar-powered pumps. A Chennai-Bangalore track and an economic viability study were also presented. The competition included a poster round, followed by a final jury presentation.",
    awards:
      "The team won the first position among 1100+ participating international teams and was lauded for the Best Poster and Case Presentation.",
  },
  {
    id: 2,
    name: "GHC (Global Hyperloop Competition)",
    img: "/src/assets/recent2.jpg",
    content:
      " From 21 February to 24 February 2025, Force Hyperloop proudly represented NIT Trichy at the Global Hyperloop Competition held at IIT Madras. The four-day event brought together the brightest student teams and industry experts from across the country, creating a vibrant platform for innovation in high-speed transportation. Our participation allowed us to showcase our technical expertise, creative design solutions, and strategic problem-solving skills while learning from some of the most influential minds in the hyperloop domain.",
    awards:
      "Our hard work was recognized with prestigious awards in the Hyperloop Network and Business & Social Impact categories —an achievement that underlines our commitment to excellence and our drive to push the boundaries of hyperloop technology.",
  },
];

const RecentWorks = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flex flex-col my-[3vh] items-center justify-center">
      <h1 className="text-white md:text-xl sm:text-md text-3xl font-bold pb-5">
        RECENT WORKS
      </h1>

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            className="fixed inset-0 backdrop-blur-xl bg-black/60 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>

      <div className="relative flex flex-wrap justify-center gap-4 z-20">
        {recentData.map((data) =>
          selectedId === null || selectedId === data.id ? (
            <>
              <motion.div
                key={data.id}
                className={`border border-white flex flex-col items-center rounded-xl w-full mx-[1vw] sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden pb-[2vh] cursor-pointer ${
                  selectedId === data.id ? "z-30" : "z-20"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(selectedId === data.id ? null : data.id);
                }}
                initial={{ scale: 1, x: 0, y: 0 }}
                animate={{
                  scale: selectedId === data.id ? 1.2 : 1,
                  x: selectedId === data.id ? "-20vw" : 0,
                  y: selectedId === data.id ? "10vh" : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={data.img}
                  className="w-full h-auto aspect-video object-cover"
                />
                <div className="px-[1vw]">
                  <h1 className="text-white text-xl">{data.name}</h1>
                </div>
              </motion.div>
            </>
          ) : null
        )}
      </div>

      {selectedId !== null && (
        <>
          {recentData.map((data) =>
            selectedId === data.id ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ x: "22vw", y: "-40vh", opacity: 1 }}
                transition={{ delay: 0.5, ease: "easeOut" }}
                className="z-20 h-1/2 w-1/2 bg-black/90 text-white p-6 rounded-lg shadow-xl flex flex-col flex-wrap justify-center text-center "
                key={data.id}
              >
                <h1 className="text-2xl">Description</h1>
                <p className="">{data.content}</p>
                <h2 className="text-xl ">Awards</h2>
                <p className="">{data.awards}</p>
              </motion.div>
            ) : null
          )}
        </>
      )}
    </div>
  );
};

export default RecentWorks;
