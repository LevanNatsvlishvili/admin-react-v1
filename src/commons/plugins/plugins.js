const desktopBreakPoints = ['1024px', '1230px', '1280px', '1450px'];

// const mobileBreakpoints = ['320px', '340px', '360px', '390px', '416px', '481px'];
const mobileBreakpoints = [
  '600px',
  '540px',
  '505px',
  '480px',
  '440px',
  '420px',
  '390px',
  '380px',
  '370px',
  '360px',
  '350px',
  '320px',
];

/* Initial desktop container width divided by initial html font size 1440/10 */
const desktopRatio = 160;
/* Initial mobile width divided by initial html font size 768/10 */
const mobileRatio = 39;

const getFontSizeVal = (containerWidth, ratio) =>
  `${+containerWidth.slice(0, -2) / ratio}px`;

const getDesktopScreenOptions = (screenWidth) => ({
  screenWidth,
  fontSize: getFontSizeVal(screenWidth, desktopRatio),
});

const getMobileScreenOptions = (screenWidth) => ({
  screenWidth,
  fontSize: getFontSizeVal(screenWidth, mobileRatio),
});

const desktopScreens = desktopBreakPoints.map(getDesktopScreenOptions);

const mobileScreens = mobileBreakpoints.map(getMobileScreenOptions);

const container = {
  '.container': {
    margin: '0 auto',
    width: '168.8rem',
    '@media (max-width: 1110px)': {
      padding: '0 2rem',
      width: 'auto',
    },
  },
};

const desktopMediaQueries = desktopScreens.map((x) => ({
  [`@media (min-width: ${x.screenWidth})`]: {
    html: {
      fontSize: x.fontSize,
    },
  },
}));

const mobileMediaQueries = mobileScreens.map((x) => ({
  [`@media (max-width: ${x.screenWidth})`]: {
    html: {
      fontSize: x.fontSize,
    },
  },
}));

module.exports = [container, ...desktopMediaQueries, ...mobileMediaQueries];
