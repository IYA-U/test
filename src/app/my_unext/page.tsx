'use client';
import styled from 'styled-components';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { toJpeg } from 'html-to-image';
import ShareCardRenderer from './ShareCardRenderer';

const TestMyUnext: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const createImg = useCallback(async () => {
    if (!ref.current) return;
    const dataUrl = await toJpeg(ref.current, {
      quality: 30,
      pixelRatio: 1,
    });
    if (dataUrl.length < 300000) {
      createImg();
    } else {
      setImgUrl(dataUrl);
    }
  }, [ref]);

  useEffect(() => {
    createImg();
  }, [createImg]);

  return (
    <Wrap>
      <HideRenderer>
        <ShareCardRenderer ref={ref} />
      </HideRenderer>
      <ShareCard>
        {imgUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <ShareImg src={imgUrl} alt="あなたのトップ5" />
          </>
        ) : (
          <Loading>LOADING...</Loading>
        )}
      </ShareCard>
      <SaveIt onClick={createImg}>↑長押しで保存しよう！</SaveIt>
    </Wrap>
  );
};

const Wrap = styled.div`
  background: #000;
  overflow: hidden;
`;

const HideRenderer = styled.div`
  height: 0;
  overflow: hidden;
`;

const ShareCard = styled.div`
  max-width: 500px;
  margin: 0px auto;
  aspect-ratio: 3 / 4;
  border: 1px solid gray;
`;

const ShareImg = styled.img`
  max-width: 100%;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 100%;
  color: white;
`;
const SaveIt = styled.h3`
  font-size: 20px;
  text-align: center;
  color: white;
`;

export default TestMyUnext;
