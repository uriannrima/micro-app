declare module "hypernova-react" {
  import {
    ReactHTML,
    ReactSVG,
    SFC,
    ClassType,
    ClassicComponent,
    ComponentState,
    ClassicComponentClass,
    Component,
    ComponentClass
  } from "react";

  export function renderReact(
    name: string,
    component: "input" | keyof ReactHTML | keyof ReactSVG | string
  ): void;

  export function renderReact<P>(
    name: string,
    component:
      | SFC<P>
      | ClassType<
          P,
          ClassicComponent<P, ComponentState>,
          ClassicComponentClass<P>
        >
  ): void;

  export function renderReact<
    P,
    T extends Component<P, ComponentState>,
    C extends ComponentClass<P>
  >(name: string, component: ClassType<P, T, C>): void;

  export function renderReact<P>(
    name: string,
    component: ComponentClass<P>
  ): void;

  export function renderReactStatic(
    name: string,
    component: "input" | keyof ReactHTML | keyof ReactSVG | string
  ): void;

  export function renderReactStatic<P>(
    name: string,
    component:
      | SFC<P>
      | ClassType<
          P,
          ClassicComponent<P, ComponentState>,
          ClassicComponentClass<P>
        >
  ): void;

  export function renderReactStatic<
    P,
    T extends Component<P, ComponentState>,
    C extends ComponentClass<P>
  >(name: string, component: ClassType<P, T, C>): void;

  export function renderReactStatic<P>(
    name: string,
    component: ComponentClass<P>
  ): void;
}
