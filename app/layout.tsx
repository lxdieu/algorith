import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import Layout from "../components/common/Layout";
export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/images/icon/logo32.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/icon/logo32.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/images/icon/logo16.ico",
    },
    {
      rel: "icon",
      url: "/logo32.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Layout>{children}</Layout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
