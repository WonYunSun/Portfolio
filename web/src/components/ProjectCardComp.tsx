"use client";
import { useState } from "react";
import { getProjectDetailbyId, ProjectDetail } from "@/lib/sanity-queries";
import Image from "next/image";
import { useModalStore } from "@/store/modalStore";

interface ProjectCardProps {
  id: string;
  title: string;
  logoUrl: string;
  thumbUrl: string;
}

export const ProjectCardComp = ({
  id,
  title,
  logoUrl,
  thumbUrl,
}: ProjectCardProps) => {
  const [cache, setCache] = useState<Record<string, ProjectDetail>>({});
  const { openModal } = useModalStore();

  const handleClick = async (id: string) => {
    if (!cache[id]) {
      const detail = await getProjectDetailbyId(id);
      setCache((prv) => ({ ...prv, [id]: detail }));
      openModal(detail);
    } else {
      openModal(cache[id]);
    }
  };

  return (
    <div onClick={() => handleClick(id)}>
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
