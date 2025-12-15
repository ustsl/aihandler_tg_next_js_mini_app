
import { DeleteScenario } from "@/components/features/DeleteScenario";
import { AddScenarioPrompt } from "./components/AddScenarioPrompt";
import { SaveScenarioComponent } from "./components/SaveScenarioComponent";
import { ScenarioFormComponent } from "./components/ScenarioForm";
import { ScenarioPromptList } from "./components/ScenarioPromptList";
import { APIQueryElement } from "./components/APIQueryElement/ui/APIQueryElement";


export default async function Scenario({
    params,
}: {
    params: Promise<{ uuid: string }>;
}) {
    const { uuid } = await params;

    return (

        <>
            <ScenarioFormComponent uuid={uuid} />
            <ScenarioPromptList />
            <AddScenarioPrompt />
            <SaveScenarioComponent uuid={uuid} />
            <APIQueryElement uuid={uuid} />
            <DeleteScenario uuid={uuid} />
        </>


    );
}
