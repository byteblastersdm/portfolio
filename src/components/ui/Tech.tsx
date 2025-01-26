'use client'
import React from 'react'
import Aos from 'aos'
import Wrapper from '../shared/Wrapper'
import { FaReact, FaNode, FaAws, FaDocker, FaGit, FaGithub, FaGoogle, FaFigma } from 'react-icons/fa'
import { SiNextdotjs, SiAngular, SiPostgresql, SiSqlite, SiMongodb, SiFirebase, SiHeroku, SiNetlify, SiVercel, SiTypescript, SiElectron, SiGraphql, SiSocketdotio, SiGooglecloud, SiGooglemaps, SiGoogle } from 'react-icons/si'
import { MdHelpOutline } from 'react-icons/md'

const tech = [
    {
        name: 'Frontend Development',
        technologies: [
            { name: 'React.js', icon: <FaReact />, url: 'https://reactjs.org/' },
            { name: 'Next.js', icon: <SiNextdotjs />, url: 'https://nextjs.org/' },
            { name: 'React Native', icon: <FaReact />, url: 'https://reactnative.dev/' },
            { name: 'Angular', icon: <SiAngular />, url: 'https://angular.io/' },
            { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
            { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { name: 'TypeScript', icon: <SiTypescript />, url: 'https://www.typescriptlang.org/' },
            { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
            { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
            { name: 'Material UI', url: 'https://mui.com/' },
        ],
    },
    {
        name: 'Backend Development',
        technologies: [
            { name: 'Node.js', icon: <FaNode />, url: 'https://nodejs.org/' },
            { name: 'Express.js', url: 'https://expressjs.com/' },
            { name: 'GraphQL', icon: <SiGraphql />, url: 'https://graphql.org/' },
            { name: 'Socket.io', icon: <SiSocketdotio />, url: 'https://socket.io/' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, url: 'https://www.postgresql.org/' },
            { name: 'SQLite', icon: <SiSqlite />, url: 'https://www.sqlite.org/' },
            { name: 'MySQL', url: 'https://www.mysql.com/' },
            { name: 'MongoDB', icon: <SiMongodb />, url: 'https://www.mongodb.com/' },
            { name: 'REST API' },
        ],
    },
    {
        name: 'DevOps & Cloud',
        technologies: [
            { name: 'CI/CD Pipelines', url: '#' },
            { name: 'Docker', icon: <FaDocker />, url: 'https://www.docker.com/' },
            { name: 'AWS EC2', icon: <FaAws />, url: 'https://aws.amazon.com/ec2/' },
            { name: 'AWS Lambda', icon: <FaAws />, url: 'https://aws.amazon.com/lambda/' },
            { name: 'AWS S3 Bucket', icon: <FaAws />, url: 'https://aws.amazon.com/s3/' },
            { name: 'Google Cloud Instances', icon: <SiGooglecloud />, url: 'https://cloud.google.com/' },
            { name: 'Google Cloud Run', icon: <SiGoogle />, url: 'https://cloud.google.com/run' },
            { name: 'Google Cloud Build', icon: <SiGoogle />, url: 'https://cloud.google.com/build' },
            { name: 'Google Cloud Bucket', icon: <SiGooglecloud />, url: 'https://cloud.google.com/storage' },
            { name: 'Google Maps API', icon: <SiGooglemaps />, url: 'https://developers.google.com/maps' },
        ],
    },
    {
        name: 'Desktop Development',
        technologies: [
            { name: 'Electron.js', icon: <SiElectron />, url: 'https://www.electronjs.org/' },
            { name: 'InstallForge (Installer Creation)' },
        ],
    },
    {
        name: 'Tools & Platforms',
        technologies: [
            { name: 'Git', icon: <FaGit />, url: 'https://git-scm.com/' },
            { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/' },
            { name: 'VS Code', url: 'https://code.visualstudio.com/' },
            { name: 'Figma', icon: <FaFigma />, url: 'https://www.figma.com/' },
            { name: 'Netlify', icon: <SiNetlify />, url: 'https://www.netlify.com/' },
            { name: 'Vercel', icon: <SiVercel />, url: 'https://vercel.com/' },
            { name: 'Heroku', icon: <SiHeroku />, url: 'https://www.heroku.com/' },
        ],
    },
    {
        name: 'Other Skills',
        technologies: [
            { name: 'Linting' },
            { name: 'Full Stack Development (MERN)' },
        ],
    },
]

const Tech = () => {
    React.useEffect(() => {
        Aos.init({
            duration: 1000,
        })
    }, [])

    return (
        <Wrapper className='min-h-screen relative'>
            <section className="lg:w-[1140px] md:w-[768px] sm:w-[640px] mx-auto sm:mb-[6rem] md:py-24 py-12 px-5 mx:px-0">
                <div id="projects">
                    <div data-aos="fade-right">
                        <p className="md:text-lg text-base tracking-[5px]">TOOLS AND TECH</p>
                        <h3 className="md:text-[3rem] text-[2rem] font-semibold mt-5">
                            My Technology Stack
                        </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                        {tech.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 hover:bg-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300"
                                data-aos="fade"
                            >
                                <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    {item.technologies.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center justify-center gap-2 text-center cursor-pointer hover:scale-110 transition-transform duration-300"
                                            onClick={() => tech.url && window.open(tech.url, '_blank')}
                                        >
                                            <div className="text-3xl text-blue-500">
                                                {tech.icon ? tech.icon : <MdHelpOutline />}
                                            </div>
                                            <p className="text-sm font-medium text-gray-700">{tech.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="absolute h-[400px] w-[400px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 top-0 right-0 z-[-1] opacity-25 blur-[80px]" />
            <div className="absolute h-[400px] w-[400px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 top-1/2 right-[30%] z-[-1] opacity-25 blur-[80px]" />
            <div className="absolute h-[400px] w-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 top-0 left-0 z-[-1] opacity-25 blur-[80px]" />

        </Wrapper>
    )
}

export default Tech
