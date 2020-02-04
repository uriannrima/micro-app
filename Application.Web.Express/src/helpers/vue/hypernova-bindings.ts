import hypernova, { serialize } from "hypernova";
import Vue, { VueConstructor } from "vue";
import { createRenderer } from "vue-server-renderer";

const renderer = createRenderer();

export const renderVue = (name: string, Component: VueConstructor) =>
  hypernova({
    server() {
      return (propsData: any): Promise<string> => {
        const Constructor = Vue.extend(Component);
        if (Constructor instanceof Function) {
          console.log("Is a function...");
        }

        console.log({ Constructor });

        return renderer
          .renderToString(new Constructor({ propsData }))
          .then(contents => {
            return serialize(name, contents, propsData);
          });
      };
    },
    client() {
      return "";
    }
  });
