import withConfig, { usePageData } from 'src/hocs/withConfig';

interface TemplateData {
  food: 'ramen' | 'sushi';
}

const Template: React.FC = () => {
  const pageData = usePageData();
  return <p>{pageData}</p>;
};

export default withConfig<TemplateData>(Template);
