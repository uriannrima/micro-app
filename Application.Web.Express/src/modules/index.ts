const hypernovaRequire = require.context(".", true, /[hH]ypernova.(ts|js)$/);

const modulesMap: { [key: string]: any } = {};

const getModuleName = (filePath: string): string => {
  const pieces = filePath.split("/");
  return pieces[pieces.length - 2];
};

hypernovaRequire.keys().forEach((filePath: string) => {
  const hypernovaModule = hypernovaRequire(filePath).default;
  if (hypernovaModule) {
    modulesMap[getModuleName(filePath)] = hypernovaModule;
  }
});

export default modulesMap;
