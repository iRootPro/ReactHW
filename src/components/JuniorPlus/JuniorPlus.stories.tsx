import {JuniorPlus} from "./JuniorPlus";
import {Meta} from "@storybook/react";
import * as React from "react";
import {ReduxStoreProviderDecorator} from "../../stories/decorators/ReduxStoreProviderDecorator";

export default {
    title: "JuniorPlus/JuniorPage",
    component: JuniorPlus,
    decorators: [ReduxStoreProviderDecorator]
} as Meta

export const JuniorPageComponent = (props: any) => {
    return <JuniorPlus/>
}