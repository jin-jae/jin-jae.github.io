import BioLinks from "@/components/BioLinks";
import Profile from "@/components/Profile";
import Templates from "@/components/Templates";
import Title from "@/modal/Title";

import projectData from "@/data/ProjectData";
import educationData from "@/data/EducationData";
import publicationData from "@/data/PublicationData";
import experienceData from "@/data/ExperienceData";
import awardData from "@/data/AwardData";
import skillData from "@/data/SkillData";
import additionalExperienceData from "@/data/AdditionalExperienceData";
import languageData from "@/data/LanguageData";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-6 min-h-screen max-w-5xl mx-auto p-4 pb-20 sm:p-20">
      <Profile />
      <BioLinks />
      <main className="flex flex-col w-full">
        <Title title="EDUCATION" />
        <Templates data={educationData} />
      </main>
      <main className="flex flex-col w-full">
        <Title title="PUBLICATIONS" />
        <Templates data={publicationData} />
      </main>
      <main className="flex flex-col w-full">
        <Title title="PROJECTS" />
        <Templates data={projectData} />
      </main>
      <main className="flex flex-col w-full">
        <Title title="EXPERIENCES" />
        <Templates data={experienceData} />
      </main>
      <main className="flex flex-col w-full">
        <Title title="AWARDS" />
        <Templates data={awardData} />
      </main>
      <main className="flex flex-col w-full">
        <Title title="SKILLS" />
        <Templates data={skillData} />
      </main>
      <main className="flex flex-col w-full">
        <Title title="ADDITIONAL EXPERIENCES" />
        <Templates data={additionalExperienceData} />
      </main>
      <main className="flex flex-col w-full">
        <Title title="LANGUAGE" />
        <Templates data={languageData} />
      </main>
      <footer className="items-center justify-center text-sm">
        © 2025 Jinjae Kim. All rights reserved.
      </footer>
    </div>
  );
}