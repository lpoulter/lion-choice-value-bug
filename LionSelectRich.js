import React from "react";
import { createComponent } from "@lit-labs/react";
import { LionSelectRich as LionSelectRichClass } from "@lion/select-rich";
import "@lion/select-rich/define";

export const LionSelectRich = createComponent(
  React,
  "lion-select-rich",
  LionSelectRichClass,
  { onModelValueChange: "model-value-changed" }
);
