import "../styles/globals.css";
import LogRocket from "logrocket";
import PlausibleProvider from "next-plausible";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { DefaultSeo } from "src/components/SEO";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export type NextPageWithAuth = NextPage & {
  auth?: boolean;
};

type AppPropsWithAuth = AppProps & {
  Component: NextPageWithAuth;
};

const Auth = ({ children }: { children: any }) => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;

  useEffect(() => {
    if (status === "loading") return;
    if (!isUser) {
      signIn();
    }
  }, [isUser, status]);

  if (isUser) {
    return <>{children}</>;
  }

  return null;
};

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithAuth) => {
  LogRocket.init("insilica-labs/colossus");
  return (
    <SessionProvider session={session}>
      <PlausibleProvider domain="colossus.fyi">
        <DefaultSeo />
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
        <Analytics />
      </PlausibleProvider>
    </SessionProvider>
  );
};

export default MyApp;
