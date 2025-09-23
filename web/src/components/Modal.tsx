"use client";
import { useModalStore } from "@/store/modalStore";
import Image from "next/image";
import { PortableText } from "next-sanity";

export const Modal = () => {
  const { isOpen, project, closeModal } = useModalStore();

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 "
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 rounded-xl max-w-4xl h-9/10 overflow-y-scroll scrollbar-hide"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 모달 닫히지 않도록
      >
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <Image
          src={project.logoUrl}
          alt={project.title}
          width={30}
          height={30}
        />
        <p>
          {new Date(project.projectPeriod.startDate).toLocaleDateString()} ~{" "}
          {new Date(project.projectPeriod.endDate).toLocaleDateString()}
        </p>

        <p>{project.description}</p>
        <div>
          {project.contributions.map((contribution) => (
            <div key={contribution._key} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {contribution.title}
              </h3>
              <PortableText value={contribution.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
