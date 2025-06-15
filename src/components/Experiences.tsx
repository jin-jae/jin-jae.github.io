import ProjectData from "@/data/ProjectData";
import Experience from "@/modal/Experience";

export default function Experiences() {
  return (
    <section className="py-2">
      {ProjectData.map((proj: any, idx: any) => (
        <Experience key={idx} {...proj} />
      ))}
    </section>
  );
}