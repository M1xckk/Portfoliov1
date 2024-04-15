import Head from "next/head";
import HeroText from "@/components/atoms/HeroText";
import HomepageText from "@/components/atoms/HomepageText";
import TitleText from "@/components/atoms/TitleText";
import ContactLinks from "@/components/molecules/ContactLinks";
import Navbar from "@/components/molecules/Navbar";
import Artifact from "@/components/organisms/Artifact";
import ContactBox from "@/components/organisms/ContactBox";

export default function Index() {

  const projects = [
    {
      name: "TravelMeet",
      description: "TravelMeet is full stack web app that helps users connect with new people and discover events in specific locations. It features a dynamic map that provides real-time shared location information of users and events in the selected area. Users can view profiles, follow others, and create groups to plan event visits together.",
      tags: ["React", "Next.js", "TypeScript", "Redis", "Socket.io","Prisma"],
      links: ["https://github.com/alxlvgit/travel-meet", "https://byrfaqijzp.us17.qoddiapp.com/auth/login"]
    },
    {
      name: "BuzzReel",
      description: `BuzzReel is a C# app with react, that allows users to sign up, log in, and create movie posts. Users can delete posts and view other users'posts. This app use signalR to update the posts in real time.`,
      tags: ["React", "Next.js", "Typescript", "Tailwind", "csharp"],
      links: ["https://github.com/M1xckk/csharp", "https://buzzreel-web.fly.dev"]
    },
    {
      name: "AniSOS",
      description: "AniSOS is a simple animal information web app that allows users to view and search for animals. Users can take a quiz to help them understand how to do when animals are hurt.",
      tags: ["React", "Next.js", "JavaScript", "Vercel"],
      links: ["https://github.com/DevynnT/anisos", "https://anisos.vercel.app/"]
    },
    {
      name: "WhiteStone",
      description: "WhiteStone is a AI dentist app that users can through take a image of their teeth and get a report of their teeth health.",
      tags: ["React", "Next.js", "JavaScript", "openai", "Vercel","Python", "Tailwind"],
      links: ["https://github.com/WhiteStoneDental/whitestone_IDSP", "https://whitestone-idsp.vercel.app/"]
    },
    {
      name: "EJS",
      description: "EJS Blog is a website that can teach beginners how to use EJS to make some functions step by step.",
      tags: ["JavaScript", "HTML", "CSS"],
      links: ["https://github.com/M1xckk/EJS-Beginner-Guide", "https://m1xckk.github.io/EJS-Beginner-Guide/"]
    },
  ]

  return (
    <>
      <Head>
        <title>Brian Xu • Full Stack Developer</title>
        <meta name="description" content="Brian Xu's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/qbs6lbt.css"></link>
      </Head>
      <main className="min-h-screen font-darkmode-on">
        <Navbar />
        <div id="" className="fixed h-screen z-0">
          <video src={"./files/background.mp4"} autoPlay={true} preload="auto" loop muted className="object-cover w-screen h-screen pointer-events-none bg-contain"></video>
        </div>
        <div className="relative z-10 w-4/5 m-auto">
          <div className="flex flex-col justify-start lg:pl-32 py-24 xl:py-64 h-screen drop-shadow-lg">
            <HeroText text={"Hi, I'm Brian Xu"} spacing="pt-16" />
            <TitleText text={"Full Stack Web Developer"} spacing="py-4" />
            <HomepageText text={"I'm a full stack developer based in Vancouver, Canada,"} />
            <HomepageText text={"Loving coding and playing video games."} />
            <ContactLinks decoration="mt-2 -ml-2" />
          </div>
          <div id="projects" className="flex flex-col items-center justify-center pt-36 mb-8 drop-shadow-lg">
            <TitleText text={"Projects I Worked On"} spacing="px-4 pb-20 lg:p-8" decoration="text-center" />
            {projects.map((project) => (
              <Artifact key={project.name} artifactName={project.name} description={project.description} tags={project.tags} links={project.links} />
              ))}          
          </div>
          <div id="contact" className="flex flex-col items-center justify-center pt-48 pb-36 drop-shadow-lg">
            <ContactBox />
          </div>
        </div>
      </main>
    </>
  )
}
