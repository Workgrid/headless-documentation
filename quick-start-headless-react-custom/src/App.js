import React from "react";
import * as AC from "adaptivecards";
import { ExecuteAction } from "./card-objects/ExecuteAction";
import { SubmitAction } from "./card-objects/SubmitAction";
import { ShowCardAction } from "./card-objects/ShowCardAction";
import { OpenUrlAction } from "./card-objects/OpenUrlAction";
import { TextInput } from "./card-objects/TextInput";
import { NumberInput } from "./card-objects/NumberInput";
import { ChoiceSetInput } from "./card-objects/ChoiceSetInput";
import { DateInput } from "./card-objects/DateInput";
import { ToggleInput } from "./card-objects/ToggleInput";

import { TextBlock } from "./card-objects/TextBlock";
import Microapps from "./components/Microapps";

// Add custom components to the adaptive-cards registry
AC.GlobalRegistry.actions.register(SubmitAction.JsonTypeName, SubmitAction);
AC.GlobalRegistry.actions.register(ExecuteAction.JsonTypeName, ExecuteAction);
AC.GlobalRegistry.actions.register(ShowCardAction.JsonTypeName, ShowCardAction);
AC.GlobalRegistry.actions.register(OpenUrlAction.JsonTypeName, OpenUrlAction);
AC.GlobalRegistry.elements.register(TextInput.JsonTypeName, TextInput);
AC.GlobalRegistry.elements.register(NumberInput.JsonTypeName, NumberInput);
AC.GlobalRegistry.elements.register(ToggleInput.JsonTypeName, ToggleInput);
AC.GlobalRegistry.elements.register(DateInput.JsonTypeName, DateInput);
AC.GlobalRegistry.elements.register(
  ChoiceSetInput.JsonTypeName,
  ChoiceSetInput
);
AC.GlobalRegistry.elements.register(TextBlock.JsonTypeName, TextBlock);

export default function App() {
  return <Microapps />;
}
