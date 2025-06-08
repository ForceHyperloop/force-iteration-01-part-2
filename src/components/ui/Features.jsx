import { cn } from "../../../lib/utils";

export function FeaturesSectionDemo() {
  const features = [
  {
    title: "Driven by Students",
    description:
      "A passionate team from NIT Trichy, led entirely by students with a vision for innovation in transportation.",
  },
  {
    title: "Hyperloop Innovation",
    description:
      "We aim to revolutionize high-speed transport through cutting-edge hyperloop technology and design.",
  },
  {
    title: "Multidisciplinary Collaboration",
    description:
      "We bring together Mechanical, Electrical, Electronics, and Computer Science students for integrated R&D.",
  },
  {
    title: "Sustainable and Efficient",
    description:
      "Our goal is to build hyperloop systems that are cost-effective, energy-efficient, and future-ready.",
  },
  {
    title: "Proven Track Record",
    description:
      "We’ve earned recognition at major competitions like the Global Hyperloop Competition at IIT Madras.",
  },
  {
    title: "Relentless Prototyping",
    description:
      "Our design process is powered by rigorous research, hands-on prototyping, and expert feedback.",
  },
  {
    title: "Vision for Scalable Impact",
    description:
      "We're committed to building a robust framework that can integrate with modern transport networks.",
  },
  {
    title: "Community & Collaboration",
    description:
      "At our core, we believe in solving real-world problems together, through teamwork and shared purpose.",
  },
];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {/* <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div> */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
