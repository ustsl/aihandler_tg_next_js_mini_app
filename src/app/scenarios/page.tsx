'use client'

import { CreateScenario } from "@/components/features/CreateScenario";
import { ScenarioList } from "./components/ScenarioList";


export default function ScenariosPage() {

    return (

        <>
            <CreateScenario />
            <ScenarioList />

        </>


    );
}
