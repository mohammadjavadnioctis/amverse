import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import style from 'next'
const getInitialProps = createGetInitialProps();



export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body className={`lg:h-[100vh] overflow-hidden`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}