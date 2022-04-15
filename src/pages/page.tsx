import Template from 'src/components/Template';
import { NextPage } from 'next';

const Page: NextPage = () => (
  <Template
    pageConfig={{
      campaign: 'a',
      templateData: {
        food: 'ramen',
      },
    }}
  />
);

export default Page;
