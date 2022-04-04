import { NextPage } from 'next';
import AsConstTest from 'src/components/AsConstTest';

const childrenProps: Readonly<{ type: HogePattern; texts: string[] }[]> = [
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
      <AsConstTest {...props} />
    ))}
  </div>
);

export default TestReadOnlyErrorPage;
