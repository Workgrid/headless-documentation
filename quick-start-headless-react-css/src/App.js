import React from "react";
import { ProvidesHostConfigContext } from "adaptivecards-react";
import Microapps from "./components/Microapps";
import hostConfig from "./hostConfig";

// The ProvidesHostConfigContext allows a global hostConfig to be applied to all cards across the application

export default function App() {
  return (
    <ProvidesHostConfigContext hostConfig={hostConfig}>
      <Microapps />
    </ProvidesHostConfigContext>
  );
}
