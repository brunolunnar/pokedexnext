import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
        gray500: '#333',
        white:"#fff",
        black100:'#111',
        red:'#e33d33',
    },
  }
});