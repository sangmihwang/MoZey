// 자주쓰이는 css
const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
    `,
  flexCenterColumn: `
        display: flex;
        flex-direction: column;
        justify-contents: center;
        align-items: center;
    `,
};

const color = {
  background: "#FFF4DA",
  background2: "#EBE09B",
  white: "#FFF",
  black: "#000",
  darkgray: "#6D675B",
  lightgray: "#CFC8B8",
  gray: "#6D675B",
  blue: "#4368FF",
  yellow: "#FFD94A",
  red: "#FF4C38",

  mainFilter:
    "invert(34%) sepia(44%) saturate(5088%) hue-rotate(211deg) brightness(99%) contrast(90%)",
  warningFilter:
    "invert(16%) sepia(51%) saturate(7032%) hue-rotate(357deg) brightness(105%) contrast(108%)",
};

const font = {
  main: `'Noto Sans KR', 'Pretendard', sans-serif`,
};

const fontsize = {
  logo: "27px",
  title1: "24px",
  title2: "20px",
  title3: "18px",
  title4: "16px",
  content: "14px",
  subcontent: "12px",
};

const lineheight = {
  content: "24px",
  quiztitle: "28px",
  title1: "24px",
  title2: "20px",
  title3: "16px",
  sub1: "14px",
};

const shadow = {
  // card: `0px 3px 3px 0px rgba(0, 0, 0, 0.03);`,
  card: `0px 6px 6px 0px rgba(0, 0, 0, 0.07);`,
};

const Theme = {
  common,
  color,
  shadow,
  font,
  fontsize,
  lineheight,
};

export default Theme;
