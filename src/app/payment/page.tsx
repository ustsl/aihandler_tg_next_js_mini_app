'use client'

import translate from './page.translate.json'

import { ContainerWrapper } from "@/components/shared/ContainerWrapper";
import { GridBlock } from "@/components/shared/GridBlock";
import { TitleBlock } from "@/components/shared/TitleElement";
import { PaymentWidget } from "./components/widgets/PaymentWidget";
import { useDataStore } from '@/store/useDataStore';
import { baseLanguages } from '@/types/baseTypes';

export default function Page() {

  const { userLanguage } = useDataStore((state: any) => state);
  const translation = translate[`${userLanguage as baseLanguages}`]


  return (
    <ContainerWrapper>
      <GridBlock gridSize="S">
        <TitleBlock tag="h1" text={translation.title} />
        <GridBlock gridSize="XS">
          <p>{translation.d1}</p>
          <p>{translation.d2}</p>

        </GridBlock>
        <PaymentWidget />
      </GridBlock>
    </ContainerWrapper>
  );
}
