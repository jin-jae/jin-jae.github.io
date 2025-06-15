import BioLinks from "@/components/BioLinks";
import Profile from "@/components/Profile";
import Experiences from "@/components/Experiences";
import Title from "@/modal/Title";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-6 min-h-screen max-w-5xl mx-auto p-4 pb-20 sm:p-20">
      <Profile />
      <BioLinks />
      <main className="flex flex-col w-full">
        <Title title="EDUCATION" />
      </main>
      <main className="flex flex-col w-full">
        <Title title="PUBLICATIONS" />
      </main>
      <main className="flex flex-col w-full">
        <Title title="PROJECTS" />
        <Experiences />
      </main>
      <main className="flex flex-col w-full">
        <Title title="EXPERIENCES" />
      </main>
      <main className="flex flex-col w-full">
        <Title title="AWARDS" />
      </main>
      <main className="flex flex-col w-full">
        <Title title="SKILLS" />
      </main>
      <main className="flex flex-col w-full">
        <Title title="ADDITIONAL EXPERIENCES" />
      </main>
      <main className="flex flex-col w-full">
        <Title title="LANGUAGE" />
      </main>
      <footer className="items-center justify-center text-sm">
        © 2025 Jinjae Kim. All rights reserved.
      </footer>
    </div>
  );
}