import React, { useContext } from 'react';

interface CommonProps {
  campaign: 'a' | 'b';
}

const PageDataContext = React.createContext({});
export const usePageData = () => {
  return useContext(PageDataContext);
};

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint,@typescript-eslint/no-explicit-any
const withConfig = <TemplateData extends any>(
  TemplateComponent: React.FC,
): React.FC<{ pageConfig: CommonProps & { templateData: TemplateData } }> => {
  const EnchantedTemplate = ({
    pageConfig,
  }: {
    pageConfig: CommonProps & { templateData: TemplateData };
  }) => {
    const pageContextVal = {
      campaign: pageConfig.campaign,
      templateData: pageConfig.templateData,
    };
    return (
      <>
        <PageDataContext.Provider value={pageContextVal}>
          <TemplateComponent />
        </PageDataContext.Provider>
      </>
    );
  };

  EnchantedTemplate.displayName = 'EnchantedTemplate';
  return EnchantedTemplate;
};

export default withConfig;
