import React, { useContext } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Top from 'src/components/Template/Top';
import { fetchGenreListForSearch } from 'src/apis';
import { GenreListForSearch } from 'src/types/napi';

interface Props {
  api: {
    videoGenre: GenreListForSearch;
  };
}

const PropsContext = React.createContext<Props>({} as Props);
export const usePropsContext = (): Props => {
  return useContext(PropsContext);
};

const IndexPage: NextPage<Props> = ({ api }) => (
  <PropsContext.Provider
    value={{
      api,
    }}
  >
    <Top
      pageConfig={{
        color: {
          mode: 'dark',
          themeColors: {
            dark: {
              hue: 213,
              saturation: 43,
              lightness: 10,
            },
            bright: {
              hue: 212,
              saturation: 81,
              lightness: 49,
            },
          },
        },
        cta: {
          clickHandler: {
            type: 'link',
            links: {
              sp: 'https://account.unext.jp/account/input/LPFT81V1',
              pc: 'https://account.unext.jp/account/input/LPFS3X9X',
            },
          },
        },
        head: {
          title:
            'U-NEXT（ユーネクスト）-映画 / ドラマ / アニメから、マンガや雑誌といった電子書籍まで- │ 31日間無料トライアル',
          description:
            '<31日間無料トライアル実施中>映画/ドラマ/アニメ/電子書籍を観るならU-NEXT（ユーネクスト）。名作はもちろん最新作も！豊富な作品の中からお好きな動画を見つけて、是非お楽しみください。',
          showGoogle: true,
          canonical: 'https://video.unext.jp/',
        },
        trialPoint: '600',
        logoLink: 'https://video.unext.jp/',
      }}
    />
  </PropsContext.Provider>
);

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const videoGenre = await fetchGenreListForSearch({});
  return {
    props: {
      api: {
        videoGenre,
      },
    },
  };
};

export default IndexPage;
