import React from "react";
import { ProjectCardComp } from "./ProjectCardComp";

export const ProjectSectionComp = () => {
  return (
    <div className="h-fit container-padding">
      <div>
        <p className="text-4xl font-bold">프로젝트</p>
      </div>

      <div>
        <ProjectCardComp />
      </div>
    </div>
  );
};
