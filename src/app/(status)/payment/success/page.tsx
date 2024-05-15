import { ContainerWrapper } from "@/components/shared/ContainerWrapper";
import { GridBlock } from "@/components/shared/GridBlock";
import { TitleBlock } from "@/components/shared/TitleElement";

export default async function Page() {

  return (
    <ContainerWrapper>
      <GridBlock gridSize="S">
        <TitleBlock tag="h1" text="Success" />
        <p>Payment has been successfully made. Your balance has been replenished.</p>
      </GridBlock>
    </ContainerWrapper>
  );
}
