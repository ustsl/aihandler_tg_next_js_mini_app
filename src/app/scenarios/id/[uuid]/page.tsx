
import { AddScenarioPrompt } from "./components/AddScenarioPrompt";
import { ScenarioFormComponent } from "./components/ScenarioForm";
import { ScenarioPromptList } from "./components/ScenarioPromptList";


export default function Scenario({ params }: { params: any }) {

    return (

        <>
            <ScenarioFormComponent uuid={params.uuid} />
            <ScenarioPromptList />
            <AddScenarioPrompt />
        </>


    );
}
