const getThumbnailUrl = (sid: string): string =>
  `https://imgc.nxtv.jp/img/info/tit/000${sid.slice(5, 7)}/${sid}.png`;
export default getThumbnailUrl;
