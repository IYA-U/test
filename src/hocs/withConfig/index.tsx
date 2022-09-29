interface PageConfig {
  headerText: string;
}

const withConfig = <TemplateProps,>(
  TemplateComponent: React.FC<TemplateProps>,
): React.FC<{ pageConfig: PageConfig & { templateProps: TemplateProps } }> => {
  const EnchantedTemplateComponent = ({
    pageConfig,
  }: {
    pageConfig: PageConfig & { templateProps: TemplateProps };
  }) => {
    return (
      <>
        <p>{pageConfig.headerText}</p>
        <TemplateComponent {...pageConfig.templateProps} />
      </>
    );
  };

  return EnchantedTemplateComponent;
};

export default withConfig;
