import type { LinkInfoProps } from '@/types/LinkInfoProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function LinkInfo({ icon, text, href }: LinkInfoProps) {
  const isHrefExist = typeof href === 'string' && href.length > 0;

  const containerClass = isHrefExist
    ? 'group flex items-center cursor-pointer transition-colors hover:text-blue-600'
    : 'flex items-center transition-colors';

  const IconWrapper = (
    <span className="w-6 flex-shrink-0 flex justify-center">
      <FontAwesomeIcon icon={icon} />
    </span>
  );

  const TextWrapper = (
    <span className="ml-2 text-sm text-gray-700 group-hover:text-blue-600">
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
      <span className="ml-2 text-sm text-gray-700">{text}</span>
    </div>
  );
}