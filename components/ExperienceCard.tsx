import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Experience, Technology } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experiences: Experience;
};

export default function ExperienceCard({ experiences }: Props) {
  function technology(
    value: Technology,
    index: number,
    array: Technology[]
  ): ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <article
      className="flex flex-col rounded-lg items-center mt-[90px]  flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] xl:h-[480px] snap-center bg-[#292929] p-[10px] hover:opacity-100 xl:ml-10
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-[100px] h-[100px] rounded-full xl:w-[90px] xl:h-[90px] object-cover object-center"
        src={urlFor(experiences?.companyImage).url()}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">CEO</h4>
        <p className="font-bold text-2xl mt-1">Noah</p>
        <div className="flex space-x-2 my-2">
          {experiences.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experiences.dateStarted).toDateString()} -{" "}
          {experiences.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experiences.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-2 ml-5 text-lg h-[200px] overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-white">
          {experiences.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
