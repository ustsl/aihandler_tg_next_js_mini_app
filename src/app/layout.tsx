import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";


import { TelegramWrapper } from "@/components/shared/TelegramWrapper";
import { HeaderComponent } from "@/components/widgets/HeaderComponent";
import { GridBlock } from "@/components/shared/GridBlock";
import { FooterComponent } from "@/components/widgets/FooterComponent";
import { DataWrapper } from "@/components/shared/DataWrapper";
import { CloseButton } from "@/components/features/CloseButton";
import { NotificationComponent } from "@/components/widgets/NotificationWidget";
import { FlexWrapper } from "@/components/shared/FlexWrapper";
import { MiniButtonLinkComponent } from "@/components/shared/MiniButtonComponent";
import { ContainerWrapper } from "@/components/shared/ContainerWrapper";
import { ScriptsBlock } from "@/components/shared/ScriptsBlock";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Handler. Create personal bot using GPT Prompts",
  description: "Telegram AI Hangler",
  icons: {
    icon: 'icon.png'
  }
};

declare global {
  interface Window {
    ym: any;
    dataLayer: any;
    Telegram: {
      WebApp: any;
    };
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ScriptsBlock gtmList={'GTM-5Q75X56W'} />
      <body className={inter.className}>
        <TelegramWrapper>
          <DataWrapper>
            <GridBlock gridSize="XS">
              <HeaderComponent />
              {children}
              <FooterComponent />
              <ContainerWrapper>
                <FlexWrapper>
                  <CloseButton />
                  <MiniButtonLinkComponent href="https://t.me/ustsl" text="Write to Developer" />
                  <MiniButtonLinkComponent href="https://imvo.site/faq" text="Read instructions" />
                </FlexWrapper>
              </ContainerWrapper>
            </GridBlock>
          </DataWrapper>
        </TelegramWrapper>
        <NotificationComponent />
      </body>
    </html>
  );
}
