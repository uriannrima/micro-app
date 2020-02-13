const glob = require("glob");

const getHypernovaComponents = modulesPath => {
  modulesPath = modulesPath || "./src/modules";
  const componentFiles = glob.sync(`${modulesPath}/**/hypernova.ts`);
  return componentFiles.reduce((map, current) => {
    const componentPath = current.split("/");
    const componentName = componentPath[componentPath.length - 2];

    return {
      ...map,
      [componentName]: current
    };
  }, {});
};

module.exports = {
  getHypernovaComponents
}
