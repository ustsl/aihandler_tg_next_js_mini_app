import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { TelegramWrapper } from "@/components/shared/TelegramWrapper";
import { HeaderComponent } from "@/components/widgets/HeaderComponent";
import { GridBlock } from "@/components/shared/GridBlock";
import { FooterComponent } from "@/components/widgets/FooterComponent";
import { DataWrapper } from "@/components/shared/DataWrapper";
import { NotificationComponent } from "@/components/widgets/NotificationWidget";
import { ScriptsBlock } from "@/components/shared/ScriptsBlock";
import { FinalLinks } from "@/components/widgets/FinalLinks/ui/FinalLinks";



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

      <body className={inter.className}>
        <ScriptsBlock gtmList={'GTM-5Q75X56W'} />
        <TelegramWrapper>
          <DataWrapper>
            <GridBlock gridSize="XS">
              <HeaderComponent />
              {children}
              <FooterComponent />
              <FinalLinks />
            </GridBlock>
          </DataWrapper>
        </TelegramWrapper>
        <NotificationComponent />
      </body>
    </html>
  );
}
