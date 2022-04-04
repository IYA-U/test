interface Props {
  type: 'typeA' | 'typeB';
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
