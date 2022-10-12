import * as React from "react";
import { IJQuerySampleProps } from "./IJQuerySampleProps";
import * as $ from "jquery";

export default class JQuerySample extends React.Component<
  IJQuerySampleProps,
  {}
> {
  componentDidMount(): void {
    $("button").on("click", (e: JQuery.Event) => {
      console.log(e);
      console.log("Hello World");
      alert("Hello World");
    });
  }

  public render(): React.ReactElement<IJQuerySampleProps> {
    return (
      <div className="App">
        <h1>jQuery in React App</h1>
        <button>Click Me</button>
      </div>
    );
  }
}
