
import { DeleteScenario } from "@/components/features/DeleteScenario";
import { AddScenarioPrompt } from "./components/AddScenarioPrompt";
import { SaveScenarioComponent } from "./components/SaveScenarioComponent";
import { ScenarioFormComponent } from "./components/ScenarioForm";
import { ScenarioPromptList } from "./components/ScenarioPromptList";
import { APIQueryElement } from "./components/APIQueryElement/ui/APIQueryElement";


export default function Scenario({ params }: { params: any }) {

    return (

        <>
            <ScenarioFormComponent uuid={params.uuid} />
            <ScenarioPromptList />
            <AddScenarioPrompt />
            <SaveScenarioComponent uuid={params.uuid} />
            <APIQueryElement uuid={params.uuid} />
            <DeleteScenario uuid={params.uuid} />
        </>


    );
}
