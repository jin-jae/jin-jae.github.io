import { TitleProps } from "@/types/TitleProps";

export default function Title({ title }: TitleProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold border-b">{title}</h2>
      <hr className="border-t-2" />
    </div>
  );
}