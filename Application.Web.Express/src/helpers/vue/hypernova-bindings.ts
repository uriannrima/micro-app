import Vue from "vue";
import hypernova, { serialize } from "hypernova";
import { createRenderer } from "vue-server-renderer";
import { VueConstructor } from "vue/types/umd";

export const renderVue = (name: string, Component: VueConstructor<Vue>): void =>
  hypernova({
    server() {
      return async (propsData: any): Promise<string> => {
        const Constructor = Vue.extend(Component);
        const componentInstance = new Constructor({
          propsData
        });
        const renderer = createRenderer();
        const contents = await renderer.renderToString(componentInstance);
        return serialize(name, contents, propsData);
      };
    },
    client() {
      return "";
    }
  });
