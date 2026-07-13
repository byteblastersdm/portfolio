import React from 'react';
import { projects } from '../../../Data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { IconBrandReact, IconBrandNextjs, IconBrandJavascript, IconBrandPython, IconBrandCSharp, IconBrandNodejs } from '@tabler/icons-react';
import Wrapper from '../../../components/shared/Wrapper';
import { Metadata } from 'next';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found | Saddam Irake',
    };
  }

  return {
    title: `${project.name} | Saddam Irake Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.name} - Project by Saddam Irake`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description: project.description,
      images: [project.image],
    },
  };
}

const techIcons: any = {
  'Next.js': <IconBrandNextjs size={24} />,
  React: <IconBrandReact size={24} />,
  'React Native': <IconBrandReact size={24} />,
  'Node.js': <IconBrandNodejs size={24} />,
  Python: <IconBrandPython size={24} />,
  '.NET Core': <IconBrandCSharp size={24} />,
  JavaScript: <IconBrandJavascript size={24} />,
};

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-32 relative">
      <Wrapper>
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link href="/#projects" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition-colors font-medium">
            <span className="mr-2">←</span> Back to Projects
          </Link>

          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.name}</h1>
            <p className="text-xl text-gray-400 leading-relaxed">{project.description}</p>
          </div>

          {/* Main Image */}
          <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden glassmorphism border border-gray-700 shadow-2xl mb-12">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-60" />
          </div>

          {/* Details & Tech Stack */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">About this Project</h2>
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
                {project.longDescription}
              </p>
              
              {project.link !== 'N/A' && project.link !== '#' && (
                <div className="mt-10">
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    className="inline-flex items-center justify-center rounded-xl font-medium py-3 px-8 bg-indigo-500 hover:bg-indigo-600 text-white transition duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
                  >
                    View Live Project
                  </Link>
                </div>
              )}
            </div>

            <div className="md:col-span-1">
              <div className="glassmorphism p-6 rounded-2xl border border-gray-800">
                <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-col gap-3">
                  {project.tech.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300 font-medium">
                      <div className="p-2 bg-gray-800 rounded-lg text-indigo-400">
                        {techIcons[tech] || <span className="w-6 h-6 inline-block bg-gray-700 rounded-full" />}
                      </div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* Ambient Backgrounds */}
      <div className="absolute h-[600px] w-[600px] bg-indigo-500/10 blur-[120px] top-0 right-0 z-[-1] rounded-full pointer-events-none" />
      <div className="absolute h-[500px] w-[500px] bg-pink-500/10 blur-[100px] bottom-1/4 left-0 z-[-1] rounded-full pointer-events-none" />
    </div>
  );
};

export default ProjectDetails;
