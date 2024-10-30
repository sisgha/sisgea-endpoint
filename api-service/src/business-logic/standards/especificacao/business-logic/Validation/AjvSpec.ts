import { getSpecNodesStore } from "@/business-logic/standards/especificacao/business-logic/SpecNodesStore";
import addFormats from "ajv-formats";
import Ajv from "ajv/dist/2020";

const ajvSpec = new Ajv({
  coerceTypes: true,
  useDefaults: true,
  removeAdditional: true,
  strict: "log",
});

let setup = false;

const setupAjvSpec = async () => {
  if (setup) return;

  addFormats(ajvSpec);

  const store = getSpecNodesStore();

  for (const node of store.Nodes) {
    ajvSpec.addSchema(node);
  }

  setup = true;
};

export const getAjvSpec = async () => {
  await setupAjvSpec();
  return ajvSpec;
};
