// // import Image from "next/image";
// import { Box, Typography, Grid, Button } from '@mui/material';
// import { motion } from 'framer-motion';

// // const projects = [
// //   {
// //     title: 'Restaurant Management System',
// //     description: 'A complete system for managing restaurants, including orders, menu, and staff.',
// //     url: 'https://github.com/genapi-apps/genZ',
// //     techStack: ['Angular', 'Node.js', 'Socket.io'],
// //   },
// //   {
// //     title: 'School Management System',
// //     description: 'An app for managing student records, attendance, and grades.',
// //     url: 'https://example.com/school-system',
// //     techStack: ['React', 'Express', 'MongoDB'],
// //   },
// //   // Add more projects as needed
// // ];

// // const skills = ['JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'CI/CD', 'Docker'];
// // Define animation variants for transitions
// const sectionVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };
// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer> */}
//       {/* <Box sx={{ p: 4 }}>
//         <Typography variant="h3" gutterBottom>
//           My Portfolio
//         </Typography>

//         <Typography variant="h5" gutterBottom>
//           Skills
//         </Typography>
//         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
//           {skills.map((skill, index) => (
//             <Box
//               key={index}
//               sx={{
//                 backgroundColor: '#1976d2',
//                 color: 'white',
//                 px: 2,
//                 py: 1,
//                 borderRadius: '8px',
//               }}
//             >
//               {skill}
//             </Box>
//           ))}
//         </Box>

//         <Typography variant="h5" gutterBottom>
//           Projects
//         </Typography>
//         <Grid container spacing={4}>
//           {projects.map((project, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card sx={{ height: '100%' }}>
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom>
//                     {project.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ mb: 2 }}>
//                     {project.description}
//                   </Typography>
//                   <Typography variant="body2" sx={{ mb: 2, fontWeight: 'bold' }}>
//                     Tech Stack: {project.techStack.join(', ')}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     href={project.url}
//                     target="_blank"
//                   >
//                     View Project
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box> */}
//       <Box sx={{ backgroundColor: '#f4f4f9', overflowX: 'hidden' }}>
//       {/* Header Section */}
//       <Box
//         sx={{
//           height: '100vh',
//           backgroundColor: '#1976d2',
//           color: '#fff',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//         component={motion.div}
//         variants={sectionVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <Typography variant="h2" sx={{ mb: 2 }}>
//           Welcome to My Portfolio
//         </Typography>
//         <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, textAlign: 'center' }}>
//           Hi, I am Saddam Irake, a passionate Software Engineer crafting impactful digital solutions.
//         </Typography>
//         <Button variant="contained" color="secondary" href="#about">
//           Learn More About Me
//         </Button>
//       </Box>

//       {/* About Section */}
//       <Box
//         id="about"
//         sx={{
//           py: 8,
//           px: 4,
//           textAlign: 'center',
//           backgroundColor: '#fff',
//         }}
//         component={motion.div}
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <Typography variant="h4" sx={{ mb: 3 }}>
//           About Me
//         </Typography>
//         <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto' }}>
//           I am a full-stack developer with expertise in technologies like Angular, React, and Node.js. 
//           With over 5 years of experience, I specialize in building scalable, user-friendly applications.
//         </Typography>
//       </Box>

//       {/* Projects Section */}
//       <Box
//         id="projects"
//         sx={{
//           py: 8,
//           px: 4,
//           textAlign: 'center',
//           backgroundColor: '#f9f9f9',
//         }}
//         component={motion.div}
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <Typography variant="h4" sx={{ mb: 3 }}>
//           My Projects
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <Box
//               sx={{
//                 backgroundColor: '#fff',
//                 p: 3,
//                 borderRadius: 2,
//                 boxShadow: 1,
//                 textAlign: 'center',
//               }}
//             >
//               <Typography variant="h6">Restaurant Management System</Typography>
//               <Typography variant="body2" sx={{ mt: 1 }}>
//                 A complete solution for managing restaurant operations like menu, orders, and billing.
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Box
//               sx={{
//                 backgroundColor: '#fff',
//                 p: 3,
//                 borderRadius: 2,
//                 boxShadow: 1,
//                 textAlign: 'center',
//               }}
//             >
//               <Typography variant="h6">School Management System</Typography>
//               <Typography variant="body2" sx={{ mt: 1 }}>
//                 A web application for managing student data, attendance, and grading.
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Contact Section */}
//       <Box
//         id="contact"
//         sx={{
//           py: 8,
//           px: 4,
//           textAlign: 'center',
//           backgroundColor: '#fff',
//         }}
//         component={motion.div}
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <Typography variant="h4" sx={{ mb: 3 }}>
//           Contact Me
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2 }}>
//           Email: <a href="mailto:yourname@example.com">yourname@example.com</a>
//         </Typography>
//         <Typography variant="body1">
//           LinkedIn: <a href="https://linkedin.com/in/your-profile">linkedin.com/in/your-profile</a>
//         </Typography>
//       </Box>

//       {/* Footer Section */}
//       <Box
//         sx={{
//           py: 3,
//           textAlign: 'center',
//           backgroundColor: '#1976d2',
//           color: '#fff',
//         }}
//       >
//         <Typography variant="body2">© 2024 [Your Name]. All rights reserved.</Typography>
//       </Box>
//     </Box>
//     </div>
//   );
// }
