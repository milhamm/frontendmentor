import { createStitches } from "@stitches/react";

const { styled } = createStitches({
  theme: {
    colors: {
      lightCyan: "hsl(193, 38%, 86%)",
      neonGreen: "hsl(150, 100%, 66%)",
    },
  },
});

export const Container = styled("div", {
  maxWidth: "540px",
  width: "100%",
  paddingInline: "1rem",
  margin: "0 auto",
  display: "flex",
  height: "100vh",
  alignItems: "center",
  fontWeight: 800,
});

export const Card = styled("div", {
  width: "100%",
  background: "#313A49",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "32px",
  paddingInline: "48px",
  paddingTop: "54px",
  paddingBottom: "84px",
  position: "relative",
});

export const AdviceNumber = styled("span", {
  color: "$neonGreen",
  fontSize: "13px",
  letterSpacing: "0.145em",
});

export const AdviceText = styled("p", {
  color: "$lightCyan",
  fontSize: "26px",
  margin: 0,
  textAlign: "center",
  borderBottom: "1px solid #4F5E75",
  paddingBottom: "48px",
  position: "relative",
  "&::before": {
    content: "",
    width: "6px",
    height: "16px",
    background: "$lightCyan",
    position: "absolute",
    bottom: "-8px",
    outline: "1px solid #313A49",
    left: "48%",
    borderRadius: "999px",
  },
  "&::after": {
    content: "",
    width: "6px",
    height: "16px",
    background: "$lightCyan",
    position: "absolute",
    bottom: "-8px",
    outline: "1px solid #313A49",
    left: "51%",
    borderRadius: "999px",
  },
});

export const Button = styled("button", {
  width: "65px",
  height: "65px",
  background: "$neonGreen",
  borderRadius: "9999px",
  position: "absolute",
  bottom: "-32px",
  cursor: "pointer",
});
