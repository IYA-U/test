import { NextPage } from 'next';
import LiteralProps from 'src/components/LiteralProps';

const childrenProps = [
  {
    type: 'typeA',
    texts: ['自由テキスト1'],
  },
  {
    type: 'typeB',
    texts: ['自由テキスト2'],
  },
];

const TestReadOnlyErrorPage: NextPage = () => (
  <div>
    {childrenProps.map((props) => (
      <LiteralProps {...props} />
    ))}
  </div>
);

export default TestReadOnlyErrorPage;
