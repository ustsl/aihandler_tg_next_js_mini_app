'use client'

import translate from './page.translate.json'


import { ContainerWrapper } from "@/components/shared/ContainerWrapper";
import { GridBlock } from "@/components/shared/GridBlock";
import { TitleBlock } from "@/components/shared/TitleElement";
import { useDataStore } from '@/store/useDataStore';
import { baseLanguages } from '@/types/baseTypes';

export default function Page() {

  const { userLanguage } = useDataStore((state: any) => state);
  const translation = translate[`${userLanguage as baseLanguages}`]

  return (

    <ContainerWrapper>
      <GridBlock gridSize="XS">
        <TitleBlock tag="h1" text="AIHandler" />
        <p>{translation.start}</p>
        <div dangerouslySetInnerHTML={{ __html: translation.text }} />
      </GridBlock>
    </ContainerWrapper>


  );
}
