import { use } from 'react';
const CAT_API =
  'https://api.thecatapi.com/v1/images/search?api_key=live_eR5WiVCdPtIVXHuRUjldY5jIASh35Yr1hdUYMe0YZ7uO7f4NqOA8cbEhwWYToi1d';

async function getCat() {
  const res = await fetch(CAT_API, { next: { revalidate: 10 } });
  const cat = await res.json();
  return cat;
}

const SectionWithFetch = () => {
  const cat = use(getCat());
  console.log({ cat });

  return (
    <div>
      <h2>データを自分でfetchするセクション</h2>
      <img src={cat[0].url} />
    </div>
  );
};

export default SectionWithFetch;
