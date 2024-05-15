import { ContainerWrapper } from "@/components/shared/ContainerWrapper";
import { GridBlock } from "@/components/shared/GridBlock";
import { TitleBlock } from "@/components/shared/TitleElement";
import { PaymentWidget } from "./components/widgets/PaymentWidget";

export default async function Page() {

  return (
    <ContainerWrapper>
      <GridBlock gridSize="S">
        <TitleBlock tag="h1" text="Payment" />
        <GridBlock gridSize="XS">
          <p>We use cryptoprocessing as a reliable payment method for users in any country.</p>
          <p>To pay, enter the equivalent of a dollar and confirm the entered data. After payment you will be transferred to the provider&apos;s page.</p>

        </GridBlock>
        <PaymentWidget />
      </GridBlock>
    </ContainerWrapper>
  );
}
