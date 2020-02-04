import { renderVue } from "../../../helpers/vue/hypernova-bindings";

import MyComponent from "./MyComponent.vue";

export const hypernova = renderVue("MyComponent", MyComponent);

export default MyComponent;
