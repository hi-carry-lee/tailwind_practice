import Header from "./_components/header";
import { ProjectLink } from "./_components/project-link";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap gap-8 mt-8 p-6">
        <ProjectLink href="/min-projects/subscribe-card">
          Subscribe Card
        </ProjectLink>
        <ProjectLink href="/min-projects/price-card">Price Card</ProjectLink>
        <ProjectLink href="/min-projects/product-model">
          Product Model
        </ProjectLink>
        <ProjectLink href="/min-projects/image-gallery">
          Image Gallery
        </ProjectLink>
        <ProjectLink href="/min-projects/login-modal">Login Modal</ProjectLink>
        <ProjectLink href="/min-projects/clipboard">Clipboard</ProjectLink>
        <ProjectLink href="/min-projects/loopstudios">LoopStudios</ProjectLink>
      </div>
    </div>
  );
}
