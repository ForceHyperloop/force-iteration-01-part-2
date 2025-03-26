import React from "react";

import gitIcon from "../assets/git.svg";
import linkIcon from "../assets/link.svg";
import instaIcon from "../assets/insta.svg";

const icons = [
  { id: 1, src: gitIcon, href: "https://github.com/ForceHyperloop" },
  {
    id: 2,
    src: linkIcon,
    href: "https://www.linkedin.com/company/force-hyperloop/",
  },
  { id: 3, src: instaIcon, href: "https://www.instagram.com/force_hyperloop/" },
];

const Footer = () => {
  return (
    <footer className="flex justify-between my-[2vh] z-10 ">
      <div className="inline-block ">
        {icons.map((data) => (
          <a
            href={data.href}
            className="mx-[0.5vw]"
            key={data.id}
            target="_blank"
          >
            <img
              src={data.src}
              key={data.id}
              className="inline-block h-[1.5rem] "
            />
          </a>
        ))}
      </div>
      <div className="inline-block text-purple-600 mx-[1.5vw] text-md sm:text-md md:text-xl ">
        2025 Force Hyperloop
      </div>
    </footer>
  );
};

export default Footer;
