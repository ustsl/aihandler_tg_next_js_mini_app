
import { AddScenarioPrompt } from "./components/AddScenarioPrompt";
import { SaveScenarioComponent } from "./components/SaveScenarioComponent";
import { ScenarioFormComponent } from "./components/ScenarioForm";
import { ScenarioPromptList } from "./components/ScenarioPromptList";


export default function Scenario({ params }: { params: any }) {

    return (

        <>
            <ScenarioFormComponent uuid={params.uuid} />
            <ScenarioPromptList />
            <AddScenarioPrompt />
            <SaveScenarioComponent uuid={params.uuid} />
        </>


    );
}
