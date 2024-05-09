import { ContainerWrapper } from "@/components/shared/ContainerWrapper";
import { GridBlock } from "@/components/shared/GridBlock";
import { TitleBlock } from "@/components/shared/TitleElement";

export default async function Page() {

  return (

    <ContainerWrapper>
      <GridBlock gridSize="XS">

        <TitleBlock tag="h1" text="AIHandler" />

        <p>Introducing AIHandler, your ultimate tool for creating GPT prompts with ease and efficiency! Whether you are looking to enhance your Telegram bot, integrate prompts into your own applications via API, or even monetize your creativity by sharing prompts with others people.
        </p>

        <TitleBlock tag="h2" text="With AIHandler, you can:" />

        <p><b>Create Custom Prompts:</b> Generate prompts tailored to your specific needs and preferences. Craft engaging conversation starters, thought-provoking questions, or informative prompts with just a few clicks.</p>

        <p><b>Seamless Integration:</b> Easily integrate prompts into your Telegram bot or any other application using our user-friendly API. Enhance the conversational capabilities of your bot or application with dynamic and engaging prompts generated by GPT.</p>
        <p><b>Monetization Opportunities:</b> Share your curated prompts with other users and earn money for each prompt used. Whether yo are a seasoned content creator or just starting out, AIHandler provides a platform for you to monetize your creativity and contribute to the GPT community.</p>

        <p><b>Flexible Usage:</b> Whether you are a developer, entrepreneur, or content creator, AIHandler offers flexibility in how you use and distribute prompts. From personal projects to commercial applications, AIHandler empowers you to leverage the power of GPT prompts in various ways.</p>

        <p><b>User-Friendly Interface:</b> Navigate through AIHandler intuitive interface with ease. Access advanced features for prompt customization, track usage and earnings, and manage your prompt library effortlessly.</p>


        <p>Unlock the full potential of GPT prompts with AIHandler and revolutionize the way you engage with your audience, enhance your applications, and monetize your creativity!</p>
      </GridBlock>


    </ContainerWrapper>


  );
}
