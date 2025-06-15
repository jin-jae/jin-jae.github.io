import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import BioLink from '../modal/BioLink';
import { faEnvelope, faFile, faLocationDot, faHouse } from '@fortawesome/free-solid-svg-icons';

export default function BioLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <BioLink icon={faLocationDot} text="Seoul, South Korea" />
      <BioLink icon={faEnvelope} text="jinjae.dev@gmail.com" href="mailto:jinjae.dev@gmail.com" />
      <BioLink icon={faHouse} text="personal website (TBD)" />

      <BioLink icon={faGithub} text="github.com/jin-jae" href="https://github.com/jin-jae" />
      <BioLink icon={faLinkedin} text="linkedin.com/in/jinjae" href="https://linkedin.com/in/jinjae" />
      <BioLink icon={faFile} text="jinjae.notion.site/aboutme" href="https://jinjae.notion.site/aboutme" />
    </div>
  );
}