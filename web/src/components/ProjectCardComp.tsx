import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  logoUrl: string;
  thumbUrl: string;
}

export const ProjectCardComp = ({
  title,
  logoUrl,
  thumbUrl,
}: ProjectCardProps) => {
  console.log(thumbUrl);
  return (
    <div>
      <div
        className="w-full aspect-16/9  bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${thumbUrl})` }}
      ></div>
      <div className="flex flex-low items-center gap-1 py-2">
        <Image src={logoUrl} width={30} height={30} alt="logo" />
        <div className="text-base font-medium">{title}</div>
      </div>
    </div>
  );
};
