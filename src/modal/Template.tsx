import { TemplateProps } from "@/types/TemplateProps";
import Link from "next/link";

export default function Template({ title, url, from, period, role, description, results }: TemplateProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-baseline">
        <div className="flex flex-row items-baseline space-x-2">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <h3 className="text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400">{title}</h3>
          </Link>
          <p className="text-lg">|</p>
          <p className="italic font-medium">{from}</p>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{period}</span>
      </div>
      {
        role &&
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{role}</p>
      }
      {
        description &&
        <ul className="ml-2 list-disc list-inside text-gray-800 dark:text-gray-200 mb-2">
          {description.map((item: any, idx: any) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
      
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