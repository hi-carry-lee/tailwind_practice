import Link from "next/link";

interface ProjectLinkProps {
  children: React.ReactNode;
  href: string;
}

export function ProjectLink({ children, href }: ProjectLinkProps) {
  return (
    <div>
      <Link
        href={href}
        className="text-xl font-semibold bg-amber-200 p-4 rounded hover:bg-amber-400 transition duration-300"
      >
        {children}
      </Link>
    </div>
  );
}
