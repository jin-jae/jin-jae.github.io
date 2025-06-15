import AnimatedDots from "@/components/AnimatedDots";
import Links from "@/components/Links";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-6 min-h-screen max-w-5xl mx-auto p-4 pb-20 sm:p-20">
      <Profile />
      <Links />
      <main className="flex flex-col gap-[32px]">
        <p className="text-sm text-center">
          CV Page (TBD)
        </p>
      </main>
      <footer className="items-center justify-center">
        <AnimatedDots />
      </footer>
    </div>
  );
}