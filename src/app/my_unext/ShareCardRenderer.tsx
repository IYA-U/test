import styled from 'styled-components';
import getThumbnailUrl from 'src/util/getThumbnailUrl';
import { forwardRef } from 'react';

const titles = [
  {
    name: 'チェンソーマン',
    sid: 'SID0073134',
  },
  {
    name: '花束みたいな恋をした',
    sid: 'SID0059180',
  },
  {
    name: 'ハウス・オブ・ザ・ドラゴン',
    sid: 'SID0071046',
  },
];

const ShareCardRenderer = forwardRef<HTMLDivElement>((props, ref) => (
  <Wrap ref={ref}>
    <Content>
      <Heading>あなたのトップ3</Heading>
      {titles.map(({ name, sid }, index) => (
        <Title key={sid}>
          <TitleNum>{index + 1}</TitleNum>
          <TitlePic>
            <img
              src={`${getThumbnailUrl(
                sid,
              )}?resize=430:*&output-format=webp&output-quality=60`}
              alt={name}
            />
          </TitlePic>
          <TitleName>{name}</TitleName>
        </Title>
      ))}
    </Content>
    <Bg
      src="https://imgc.nxtv.jp/img/info/titspot/00073/SID0073134_fwxga.png?output-format=jpg&output-quality=20&resize=*:500"
      alt=""
    />
  </Wrap>
));
ShareCardRenderer.displayName = 'hoge';

const Wrap = styled.div`
  aspect-ratio: 3 / 4;
  width: 1080px;
  color: white;
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  aspect-ratio: 3 / 4;
  position: relative;
  z-index: 2;
`;

const Bg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  object-fit: cover;
  filter: blur(10px) brightness(20%);
`;

const Heading = styled.div`
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  margin: 100px 0 80px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 30px auto 0;
`;

const TitleNum = styled.p`
  width: 10%;
  font-size: 70px;
  font-weight: bold;
`;

const TitlePic = styled.div`
  width: 50%;
`;

const TitleName = styled.h3`
  width: 40%;
  font-size: 40px;
  padding: 20px 0 20px 30px;
`;

const ULogo = styled.img`
  width: 300px;
  display: block;
  margin: 100px auto 0;
`;

export default ShareCardRenderer;
