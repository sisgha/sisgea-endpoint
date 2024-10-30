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

  const ignoreds = ["x-unispec-entity-id", "x-unispec-kind", "x-unispec-http-key", "x-unispec-gql-key"];

  for (const ignored of ignoreds) {
    ajvSpec.addKeyword({
      keyword: ignored,
      code() {},
    });
  }

  ajvSpec.addKeyword({
    keyword: "x-unispec-constraint-entity-exists",
    code() {
      // TODO
      console.warn("TODO: validate keyword `x-unispec-constraint-entity-exists`");
    },
  });

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
