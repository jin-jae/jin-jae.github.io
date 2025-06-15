import { ExperienceProps } from "@/types/ExperienceProps";

export default function Experience({ title, from, period, role, description, results }: ExperienceProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-baseline">
        <div className="flex flex-row items-baseline space-x-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-lg">|</p>
          <p className="font-medium">{from}</p>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{period}</span>
      </div>
      <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-1">
        <span className="font-medium">{role}</span>
      </p>
      <ul className="ml-2 list-disc list-inside text-gray-800 dark:text-gray-200 mb-2">
        {description.map((item: any, idx: any) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      { results &&
        <div className="ml-4 list-disc list-inside text-sm text-gray-800 dark:text-gray-200">
          {results.map((item: any, idx: any) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      }
    </div>
  );
}