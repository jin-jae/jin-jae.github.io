import Template from "@/modal/Template";
import { TemplateProps } from "@/types/TemplateProps";

export default function Templates({ data }: { data: TemplateProps[] }) {
  return (
    <section className="py-2">
      {data.map((proj: any, idx: any) => (
        <Template key={idx} {...proj} />
      ))}
    </section>
  );
}