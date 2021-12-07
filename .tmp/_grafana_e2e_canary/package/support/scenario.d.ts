export interface ScenarioArguments {
    describeName: string;
    itName: string;
    scenario: Function;
    skipScenario?: boolean;
    addScenarioDataSource?: boolean;
    addScenarioDashBoard?: boolean;
}
export declare const e2eScenario: ({ describeName, itName, scenario, skipScenario, addScenarioDataSource, addScenarioDashBoard, }: ScenarioArguments) => void;
