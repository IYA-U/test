const BREAKPOINTS = new Map([['PC', 1024]]);

// TODO
// 空Objectでの初期化は、TS化を阻害する。
// 利用目的を見ると const assertion にすればよさそうなので、暫定で空Object初期化をやめる
const device = {
  PC: `(min-width: ${BREAKPOINTS.get('PC')}px)`,
};
const gutterWidth = 20;

export default BREAKPOINTS;
export { device, gutterWidth };
