import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      global: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
    };

    font: {
      size: (size: number) => number;
      family: {
        black: string;
        blackItalic: string;
        bold: string;
        boldItalic: string;
        extraBold: string;
        extraBoldItalic: string;
        italic: string;
        light: string;
        lightItalic: string;
        medium: string;
        mediumItalic: string;
        regular: string;
        semiBold: string;
        semiBoldItalic: string;
      };
    };
  }
}
