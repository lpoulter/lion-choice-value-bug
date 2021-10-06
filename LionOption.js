import React from "react";
import { createComponent } from "@lit-labs/react";
import { LionOption as LionOptionClass } from "@lion/select-rich";
import "@lion/select-rich/define";

export const LionOption = createComponent(
  React,
  "lion-option",
  LionOptionClass
);
