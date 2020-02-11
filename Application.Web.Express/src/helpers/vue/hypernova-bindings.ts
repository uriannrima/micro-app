import Vue from "vue";
import hypernova, { serialize, load } from "hypernova";
import { createRenderer } from "vue-server-renderer";
import { VueConstructor } from "vue";

const createInstance = ({
  Component,
  propsData
}: {
  Component: VueConstructor<Vue>;
  propsData: any;
}): Vue => {
  const Constructor = Vue.extend(Component);
  return new Constructor({
    propsData
  });
};

export const renderVue = (name: string, Component: VueConstructor<Vue>): void =>
  hypernova({
    server() {
      return async (propsData: any): Promise<string> => {
        const componentInstance = createInstance({ Component, propsData });
        const renderer = createRenderer();
        const contents = await renderer.renderToString(componentInstance);
        return serialize(name, contents, propsData);
      };
    },
    client() {
      const payloads = load(name);
      if (payloads) {
        payloads.forEach(payload => {
          const { node, data: propsData } = payload;
          const componentInstance = createInstance({ Component, propsData });
          componentInstance.$mount(node);
        });
      }

      return Component;
    }
  });
