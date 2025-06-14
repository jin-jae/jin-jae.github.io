import AnimatedDots from "@/components/AnimatedDots";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center max-w-5xl mx-auto p-4 pb-20 sm:p-20">
      <Profile />
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