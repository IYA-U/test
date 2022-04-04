import React from 'react';

interface Props {
  type: HogePattern;
  texts: string[];
}

const LiteralProps: React.FC<Props> = ({ type, texts }) => {
  return (
    <p>
      {type} {JSON.stringify(texts)}
    </p>
  );
};

export default LiteralProps;
