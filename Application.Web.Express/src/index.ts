import express from "express";
import hypernova from // HypernovaContext
"hypernova/server";
import path from "path";

import modules from "./modules";

const getComponentFromContext = (
  componentName: string
  // context: HypernovaContext<{ framework: string }>
): NodeRequire | null => {
  return modules[componentName];
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
