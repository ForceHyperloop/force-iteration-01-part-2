import React from "react";
import styles from "./Contact.module.css";
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

const Contact = () => {
  return (
    <div className="text-white text-center flex flex-col">
      <span className={`${styles.libreBarcode} text-4xl `}>
        Join the revolution IN
      </span>
      <span className={`${styles.libreBarcode} text-4xl`}>high-speed</span>
      <span className={`${styles.libreBarcode} text-4xl`}>
        transportation with Force Hyperloop!
      </span>
      <span className="text-md sm:text-md md:text-xl">
        We are pushing the boundaries of innovation to redefine the future of
        mobility.
      </span>
      <span className="text-md sm:text-md md:text-xl">
        Whether you're an engineer, a tech enthusiast, or an industry expert,
        we'd love to connect
      </span>
      <span className="text-md sm:text-md md:text-xl">and collaborate.</span>

      <footer className="flex justify-between my-[2vh] z-10">
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
    </div>
  );
};

export default Contact;
