import { ContainerWrapper } from "@/components/shared/ContainerWrapper";
import { GridBlock } from "@/components/shared/GridBlock";
import { TitleBlock } from "@/components/shared/TitleElement";

export default async function Page() {

  return (
    <ContainerWrapper>
      <GridBlock gridSize="S">
        <TitleBlock tag="h1" text="Error" />
        <p>An error has occurred. Please report this to the administrator.</p>
      </GridBlock>
    </ContainerWrapper>
  );
}
