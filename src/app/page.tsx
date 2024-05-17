'use client'
import { CreatePrompt } from "@/components/widgets/CreatePrompt";
import { PromptList } from "@/components/widgets/PromptList";
import { SetPromptById } from "@/components/widgets/SetPromtById";

export default function Home() {

  return (

    <>
      <CreatePrompt />
      <PromptList />
      <SetPromptById />
    </>


  );
}
