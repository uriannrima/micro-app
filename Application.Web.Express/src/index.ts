import express from "express";
import hypernova, { HypernovaContext } from "hypernova/server";
import path from "path";

const frameworkMap = {
  react: "./components/react/",
  vue: "./components/vue/"
};

const createGetFrameworkPrefix = (frameworkMap: { [key: string]: string }) => (
  frameworkName: string
): string => frameworkMap[frameworkName];

const getFrameworkPrefix = createGetFrameworkPrefix(frameworkMap);

const createRequire = (prefix: string) => (
  componentName: string
): NodeRequire => {
  return require(`${prefix}${componentName}`).hypernova;
};

const getComponentFromContext = (
  componentName: string,
  context: HypernovaContext<{ framework: string }>
): NodeRequire => {
  const { metadata } = context;
  const prefix = getFrameworkPrefix(metadata.framework);
  return createRequire(prefix)(componentName);
};

hypernova({
  getComponent: getComponentFromContext,
  createApplication: function() {
    const app = express();

    app.get("/health", function(_, res) {
      return res.status(200).send("OK");
    });

    app.use(express.static(path.join(process.cwd(), "dist")));

    return app;
  },
  port: 3030
});
