import typescript from "@rollup/plugin-typescript";

import pkg from "./package.json";

const input = "./modules/index.ts";

export default [
  {
    input,
    output: { file: `cjs/${pkg.name}.js`, format: "cjs" },
    plugins: [typescript()]
  },
  {
    input,
    output: { file: `esm/${pkg.name}.js`, format: "es" },
    plugins: [typescript()]
  }
];
