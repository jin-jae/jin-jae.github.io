import type { BioLinkProps } from '@/types/BioLinkProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function BioLink({ icon, text, href }: BioLinkProps) {
  const isHrefExist = typeof href === 'string' && href.length > 0;

  const containerClass = isHrefExist
    ? 'group flex items-center cursor-pointer transition-colors hover:text-blue-600 dark:hover:text-blue-400'
    : 'flex items-center transition-colors';

  const IconWrapper = (
    <span className="w-6 flex-shrink-0 flex justify-center">
      <FontAwesomeIcon icon={icon} />
    </span>
  );

  const TextWrapper = (
    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
      {text}
    </span>
  );

  return isHrefExist ? (
    <Link href={href} className={containerClass} target="_blank" rel="noopener noreferrer">
      {IconWrapper}
      {TextWrapper}
    </Link>
  ) : (
    <div className={containerClass}>
      {IconWrapper}
      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  );
}