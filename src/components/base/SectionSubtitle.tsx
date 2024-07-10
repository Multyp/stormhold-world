/* Global imports */
/* Scoped imports */
/* Local imports */

interface SectionSubtitleProps {
  title: string;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({ title }) => {
  return <h3 className="text-3xl font-bold my-5">{title}</h3>;
};

export default SectionSubtitle;
