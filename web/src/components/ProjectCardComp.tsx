import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  logoUrl: string;
}

export const ProjectCardComp = ({ title, logoUrl }: ProjectCardProps) => {
  return (
    <div>
      <div>{title}</div>
      <Image src={logoUrl} width={50} height={50} alt="logo" />
    </div>
  );
};
