import { ProjectCardComp } from "@/components/ProjectCardComp";
import { getProjectsPreview, type Project } from "@/lib/sanity-queries";

export const ProjectSectionComp = async () => {
  const projectsPreview: Project[] = await getProjectsPreview();
  console.log(projectsPreview);

  return (
    <div className="h-fit container-padding">
      <div>
        <p className="text-4xl font-bold">프로젝트</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projectsPreview.map((project) => (
          <ProjectCardComp
            key={project._id}
            title={project.title}
            logoUrl={project.logoUrl}
          />
        ))}
      </div>
    </div>
  );
};
