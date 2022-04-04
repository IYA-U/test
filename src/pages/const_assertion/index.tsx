import { NextPage } from 'next';
import AsConstTest from 'src/components/AsConstTest';

const childrenProps = [
  {
    type: 'typeA',
    texts: ['自由テキスト1'],
  },
  {
    type: 'typeB',
    texts: ['自由テキスト2'],
  },
] as const;

const TestConstAssertion: NextPage = () => (
  <div>
    {childrenProps.map((props) => (
      <AsConstTest {...props} />
    ))}
  </div>
);

export default TestConstAssertion;
