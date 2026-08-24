import Margret from "./margret/Margret";
import Phillip from "./phillip/Philip";
import OS from "./OS/OS";

export interface WorkDefinition {
    title: string;
    component: React.ComponentType;
}

export const WORK_REGISTRY: Record<string, WorkDefinition> = {
    OperativeSystem: { title: 'OperativeSystem', component: OS},
    philip: { title: 'Philip', component: Phillip},
    margret: { title: 'Margret', component: Margret}
};