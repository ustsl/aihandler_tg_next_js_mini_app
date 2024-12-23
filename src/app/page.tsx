'use client'

import { CreatePrompt } from "@/components/features/CreatePrompt";
import { PromptList } from "@/app/components/PromptList";
import { SetPromptById } from "@/app/components/SetPromtById";

export default function Home() {

  return (

    <>
      <CreatePrompt />
      <PromptList />
      <SetPromptById />
    </>
  );
}
