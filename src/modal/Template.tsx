import { TemplateProps } from "@/types/TemplateProps";
import Link from "next/link";

export default function Template({ title, url, from, period, role, description, results }: TemplateProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-baseline">
        <div className="flex flex-wrap items-baseline space-x-2">
        {url
          ? (
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <span className="text-lg font-semibold hover:text-blue-600 inline">{title}</span>
            </Link>
          )
          : <span className="text-lg font-semibold inline">{title}</span>
        }
        {from && (
          <>
            <span className="text-lg">|</span>
            <span className="italic font-medium">{from}</span>
          </>
        )}
      </div>
      { period &&
        <span className="min-w-[9rem] text-sm text-right text-gray-600 dark:text-gray-400">{period}</span>
      }
      </div>
      {
        role &&
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{role}</p>
      }
      {
        description &&
        <ul className="ml-2 list-disc list-inside text-gray-800 dark:text-gray-200 mb-2">
          {description.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      }
      {
        results &&
        <div className="ml-4 list-disc list-inside text-sm text-gray-800 dark:text-gray-200">
          {results.map((item: string, idx: number) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      }
    </div>
  );
}