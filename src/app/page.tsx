import Image from "next/image";
import AnimatedDots from "@/components/AnimatedDots"; // 경로 확인!

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex gap-[24px] flex-wrap items-center justify-center">
        <Image
          className="w-48 h-48 rounded-full"
          src="/profile_photo.jpg"
          alt="profile-image"
          width={1024}
          height={1024}
        />
        <div className="flex flex-row items-baseline gap-[8px]">
          <h2 className="text-2xl font-bold text-center">
            Kim Jinjae
          </h2>
          <p className="text-sm text-center">
            김진재
          </p>
        </div>
      </header>
      <main className="flex flex-col gap-[32px]">
        <p className="text-sm text-center">
          CV Page (TBD)
        </p>
      </main>
      <footer className="row-start-3 flex-wrap items-center justify-center">
        <AnimatedDots />
      </footer>
    </div>
  );
}