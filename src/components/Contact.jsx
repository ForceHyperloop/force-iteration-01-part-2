import React from "react";
import styles from "./Contact.module.css";

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
    </div>
  );
};

export default Contact;
