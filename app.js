import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "@axiom/button/react/Button.js";
import { Select, Option } from "@axiom/select/react";
import { LionForm } from "./LionForm";

import "@axiom/select/define.js";

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

function UsesButton() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <Button onClick={() => setShowMessage((s) => !s)} title="Hello React">
        Ax Button
      </Button>
      {showMessage && <aside>Yo!</aside>}
    </>
  );
}

function UsesSelect() {
  return (
    <Select
      name="favoriteColors"
      label="Choose a color"
      //   modelValue={{ value:'#00ff7f', checked: false }}
      onModelValueChange={(event) => {
        console.log("onModelValueChange:detail: ", event.detail);
        console.log("onModelValueChange:modelValue: ", event.target.modelValue);
        console.log(
          "onModelValueChange:choiceValue: ",
          event.target.choiceValue
        );
      }}
    >
      {colors.map((color) => (
        <Option
          key={color.value}
          choiceValue={color.value}
          modelValue={{ value: color.value, checked: false }}
        >
          {color.label}
        </Option>
      ))}
    </Select>
  );
}

function App() {
  return (
    <main>
      <h1>ax-web</h1>
      <section>
        <h2>ax-button</h2>
        <UsesButton />
      </section>
      <section>
        <h2>ax-select / ax-option</h2>
        <UsesSelect />
      </section>
      <section>
        <h2>Issues</h2>
        <ul>
          <li>
            Lion form errors see{" "}
            <a href="lit-and-friends.slack.com/archives/CJGFWJN9J/p1622445542027800">
              here
            </a>
          </li>
          <li>
            Select: choiceValue does not work a workaround might be to use
            modelvalue.
          </li>
        </ul>
      </section>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
