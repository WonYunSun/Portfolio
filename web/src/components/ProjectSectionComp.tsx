import { ProjectCardComp } from "@/components/ProjectCardComp";
import { getProjectsPreview, type ProjectPreview } from "@/lib/sanity-queries";

export const ProjectSectionComp = async () => {
  const projectsPreview: ProjectPreview[] = await getProjectsPreview();

  return (
    <div className="h-screen  flex place-items-center container-padding bg-pink-50">
      <div className="w-full">
        <div>
          <p className="text-4xl font-bold text-center pb-30">프로젝트</p>
        </div>
        <div className="grid group grid-cols-2 md:grid-flow-col md:auto-cols-fr gap-4">
          {projectsPreview.map((project) => (
            <div
              key={project._id}
              className="transition-all duration-400 ease-out
                     group-hover:scale-85 group-hover:opacity-50 group-hover:blur-sm
                     hover:!scale-110 hover:!opacity-100 hover:!blur-none
                     hover:z-10 relative cursor-pointer"
            >
              <ProjectCardComp
                id={project._id}
                title={project.title}
                logoUrl={project.logoUrl}
                thumbUrl={project.thumbUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
