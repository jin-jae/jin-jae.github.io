import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LinkInfo from './LinkInfo';
import { faEnvelope, faFile, faLocationDot, faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Links() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <LinkInfo icon={faLocationDot} text="Seoul, South Korea" />
      <LinkInfo icon={faEnvelope} text="jinjae.dev@gmail.com" href="mailto:jinjae.dev@gmail.com" />
      <LinkInfo icon={faHouse} text="personal website (TBD)" />

      <LinkInfo icon={faGithub} text="github.com/jin-jae" href="https://github.com/jin-jae" />
      <LinkInfo icon={faLinkedin} text="linkedin.com/in/jinjae" href="https://linkedin.com/in/jinjae" />
      <LinkInfo icon={faFile} text="jinjae.notion.site/aboutme" href="https://jinjae.notion.site/aboutme" />
    </div>
  );
}