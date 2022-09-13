import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full antialiased dark">
      <Head />

      <body className="flex h-full flex-col bg-zinc-50 text-gray-900 dark:bg-gray-900 dark:text-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
