import { JSX } from "@emotion/react/jsx-runtime";

export interface Page {
    heading: string;
    component: ()=>JSX.Element;
}