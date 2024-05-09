import { ContainerWrapper } from "@/components/shared/ContainerWrapper";
import { GridBlock } from "@/components/shared/GridBlock";
import { TitleBlock } from "@/components/shared/TitleElement";

export default async function Page() {

  return (
    <ContainerWrapper>
      <GridBlock gridSize="S">
        <TitleBlock tag="h1" text="About API" />
        <p>Easily use the service not only inside the telegram interface, but also in your services using a simple API interface.</p>
        <p>The API works through a post-request, an example of which is indicated in the contents of each prompt.</p>
      </GridBlock>
    </ContainerWrapper>
  );
}
