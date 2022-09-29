import { NextPage } from 'next';
import TestWithConfig from 'src/components/TestWithConfig';

const TestWithConfigPage: NextPage = () => (
  <TestWithConfig
    pageConfig={{
      headerText: '夜のピクニック',
      templateProps: {
        bodyText:
          '晴天というのは不思議なものだ、と学校への坂道を登りながら西脇融は考えた。',
      },
    }}
  />
);

export default TestWithConfigPage;
