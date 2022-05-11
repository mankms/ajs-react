# AJS <-> React

Here's a simple AngularJS <-> React compat layer demo:
https://makhaev.com/ajs-react.

When you select a greeting in the AJS component,
it triggers the React component re-rendering with an updated greeting value.

Name change inside the React component's input triggers the AJS component update.

React `<NameInput>` component wrapped in the AJS `<name-input>` component
as a compat layer. It binds:

- AJS state to React via the `greeter` React prop.
- React state to AJS via `onChange` React prop.
