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
  }
}
