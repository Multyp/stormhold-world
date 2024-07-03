interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="text-4xl font-bold my-5 text-left">{title}</h2>;
};

export default SectionTitle;
