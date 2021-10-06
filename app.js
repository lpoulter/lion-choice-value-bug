import React from "react";
import ReactDOM from "react-dom";
import { LionSelectRich } from "./LionSelectRich";
import { LionOption } from "./LionOption";

const colors = [
  {
    value: "#ff69b4",
    label: "Dark Red",
  },
  {
    value: "#ff69b2",
    label: "Hot Pink",
  },
  {
    value: "#FFF8DC",
    label: "Corn Silk",
  },
  {
    value: "#00ff7f",
    label: "Spring Green",
  },
];

function WithChoiceValue() {
  return (
    <LionSelectRich
      name="favoriteColors"
      label="Choose a color"
      onModelValueChange={(event) => {
        console.log(
          "WithChoiceValue:onModelValueChange:modelValue: ",
          event.target.modelValue
        );
      }}
    >
      {colors.map((color) => (
        <LionOption key={color.value} choiceValue={color.value}>
          {color.label}
        </LionOption>
      ))}
    </LionSelectRich>
  );
}

function WithModelValue() {
  return (
    <LionSelectRich
      name="favoriteColors"
      label="Choose a color"
      onModelValueChange={(event) => {
        console.log(
          "WithModelValue:onModelValueChange:modelValue: ",
          event.target.modelValue
        );
      }}
    >
      {colors.map((color) => (
        <LionOption
          key={color.value}
          modelValue={{ value: color.value, checked: false }}
        >
          {color.label}
        </LionOption>
      ))}
    </LionSelectRich>
  );
}
function App() {
  return (
    <main>
      <section>
        <p>
          When the modelValue is set on the options object the model value in
          onModelValueChange is correctly set.
        </p>
        <WithModelValue />
      </section>
      <section>
        <p>
          However When the choiceValue is used instead the model value in
          onModelValueChange is undefined
        </p>
        <WithChoiceValue />
      </section>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
