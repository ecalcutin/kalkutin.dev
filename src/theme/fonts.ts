import { css } from "styled-components";

import CalibreRegularWoff from "assets/fonts/Calibre/Calibre-Regular.woff";
import CalibreRegularWoff2 from "assets/fonts/Calibre/Calibre-Regular.woff2";
import CalibreMediumWoff from "assets/fonts/Calibre/Calibre-Medium.woff";
import CalibreMediumWoff2 from "assets/fonts/Calibre/Calibre-Medium.woff2";
import CalibreSemiboldWoff from "assets/fonts/Calibre/Calibre-Semibold.woff";
import CalibreSemiboldWoff2 from "assets/fonts/Calibre/Calibre-Semibold.woff2";

import CalibreRegularItalicWoff from "assets/fonts/Calibre/Calibre-RegularItalic.woff";
import CalibreRegularItalicWoff2 from "assets/fonts/Calibre/Calibre-RegularItalic.woff2";
import CalibreMediumItalicWoff from "assets/fonts/Calibre/Calibre-MediumItalic.woff";
import CalibreMediumItalicWoff2 from "assets/fonts/Calibre/Calibre-MediumItalic.woff2";
import CalibreSemiboldItalicWoff from "assets/fonts/Calibre/Calibre-SemiboldItalic.woff";
import CalibreSemiboldItalicWoff2 from "assets/fonts/Calibre/Calibre-SemiboldItalic.woff2";

import SFMonoRegularWoff from "assets/fonts/SFMono/SFMono-Regular.woff";
import SFMonoRegularWoff2 from "assets/fonts/SFMono/SFMono-Regular.woff2";
import SFMonoSemiboldWoff from "assets/fonts/SFMono/SFMono-Semibold.woff";
import SFMonoSemiboldWoff2 from "assets/fonts/SFMono/SFMono-Semibold.woff2";

import SFMonoRegularItalicWoff from "assets/fonts/SFMono/SFMono-RegularItalic.woff";
import SFMonoRegularItalicWoff2 from "assets/fonts/SFMono/SFMono-RegularItalic.woff2";
import SFMonoSemiboldItalicWoff from "assets/fonts/SFMono/SFMono-SemiboldItalic.woff";
import SFMonoSemiboldItalicWoff2 from "assets/fonts/SFMono/SFMono-SemiboldItalic.woff2";

const calibreNormalWeights = {
  400: [CalibreRegularWoff, CalibreRegularWoff2],
  500: [CalibreMediumWoff, CalibreMediumWoff2],
  600: [CalibreSemiboldWoff, CalibreSemiboldWoff2],
};

const calibreItalicWeights = {
  400: [CalibreRegularItalicWoff, CalibreRegularItalicWoff2],
  500: [CalibreMediumItalicWoff, CalibreMediumItalicWoff2],
  600: [CalibreSemiboldItalicWoff, CalibreSemiboldItalicWoff2],
};

const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2],
};

const sfMonoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2],
};

const calibre = {
  name: "Calibre",
  normal: calibreNormalWeights,
  italic: calibreItalicWeights,
};

const sfMono = {
  name: "SF Mono",
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
};

const createFontFaces = (family, style = "normal") => {
  let styles = "";

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: swap;
      }
    `;
  }

  return styles;
};

const calibreNormal = createFontFaces(calibre);
const calibreItalic = createFontFaces(calibre, "italic");

const sfMonoNormal = createFontFaces(sfMono);
const sfMonoItalic = createFontFaces(sfMono, "italic");

const Fonts = css`
  ${calibreNormal + calibreItalic + sfMonoNormal + sfMonoItalic}
`;

export default Fonts;
