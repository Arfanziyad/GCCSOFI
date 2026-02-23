import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactSidebar from '@/components/FloatingContactSidebar';
import ProjectPageContent from './ProjectPageContent';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | GCCSOFI Projects`,
    description: project.description,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar locale={params.locale} />
      <ProjectPageContent project={project} locale={params.locale} />
      <Footer locale={params.locale} />
      <FloatingContactSidebar />
    </main>
  );
}
