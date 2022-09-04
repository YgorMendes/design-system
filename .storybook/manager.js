import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "dark",

    colorSecondary: "#5987c1",

    appBg: "#0b0a0d",
    appContentBg: "#22262B",
    appBorderColor: "#5987c1",

    textColor: "#fff",

    // Toolbar default and active colors
    barTextColor: "#E6E6E6",
    barSelectedColor: "#ffffff",
    barBg: "#1b1a1f",

    brandTitle: "Design System",
    brandUrl: "https://Captalento.com/",
  }),
});
