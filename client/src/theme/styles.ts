import { StyleProps } from '@chakra-ui/react';
const styles: StyleProps & {
  global: { [key: string]: StyleProps & { [key: string]: any } };
} = {
  global: {
    '*, body, :root': {
      margin: 0,
      fontFamily: 'Arial, Inter, sans-serif, system-ui',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    '#root': {
      w: 'full',
    },
  },
};
export default styles;
