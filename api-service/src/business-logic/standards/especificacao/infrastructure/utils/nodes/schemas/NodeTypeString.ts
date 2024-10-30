import { INodeBase, NodeBase } from "@/business-logic/standards/especificacao/infrastructure/utils/nodes/schemas/NodeBase";
import { BuildCheckType } from "@/business-logic/standards/especificacao/infrastructure/utils/nodes/schemas/helpers";
import * as valibot from "valibot";

export type INodeTypeString = INodeBase & {
  type: "string";
  format?: string;
};

export const NodeTypeString = valibot.object({
  ...NodeBase.entries,
  type: valibot.literal("string"),
  format: valibot.optional(valibot.string()),
});

export const CheckNodeTypeString = BuildCheckType<any, INodeTypeString>(NodeTypeString);
