import OS from "./OS/OS";
import Paper from "./Paper/Paper";

export interface WorkDefinition {
    title: string;
    component: React.ComponentType;
}

export const WORK_REGISTRY: Record<string, WorkDefinition> = {
    OperativeSystem: { title: 'OperativeSystem', component: OS},
    Paper: { title: 'DataCollection Paper', component: Paper}
};