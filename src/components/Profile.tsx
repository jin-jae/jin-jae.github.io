import Image from "next/image";

export default function Profile() {
  return (
    <header className="flex gap-[24px] justify-center items-center">
      <Image
        className="w-48 h-48 rounded-full"
        src="/profile_photo.jpg"
        alt="profile-image"
        width={1024}
        height={1024}
      />
      <div className="flex flex-col items-baseline gap-[8px]">
        <div className="flex items-baseline gap-[8px]">
          <h2 className="text-3xl font-bold text-center">
            Kim Jinjae
          </h2>
          <p className="text-xl font-bold text-center">
            김진재
          </p>
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-sm">
            Hi, I am Jinjae Kim, an AI Researcher.
          </p>
          <p className="text-sm">
            I am a BS student at the Department of Business Administration and Software, Kookmin University.
            I am expected to graduate in Aug, 2025.
          </p>
          <p className="text-sm">
            Currently, I am focusing on AI, especially interested in Large Language Models (LLMs) and their applications.
            I also have experience in studying Time Series, and have published a paper on the area.
          </p>
        </div>
      </div>
    </header>
  );
}