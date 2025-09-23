import { HeroComp } from "../components/HeroComp";
import { ProjectSectionComp } from "../components/ProjectSectionComp";
import { Modal } from "@/components/Modal";

export default function Home() {
  return (
    <div>
      <HeroComp />
      <ProjectSectionComp />
      <Modal />
    </div>
  );
}
