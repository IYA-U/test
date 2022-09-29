import withConfig from 'src/hocs/withConfig';

interface Props {
  bodyText: string;
}

const TestWithConfig: React.FC<Props> = ({ bodyText }) => <p>{bodyText}</p>;
export default withConfig(TestWithConfig);
