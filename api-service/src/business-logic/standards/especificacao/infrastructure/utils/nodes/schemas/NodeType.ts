import { INodeTypeArray, NodeTypeArray } from "@/business-logic/standards/especificacao/infrastructure/utils/nodes/schemas/NodeTypeArray";
import { INodeTypeBoolean, NodeTypeBoolean } from "@/business-logic/standards/especificacao/infrastructure/utils/nodes/schemas/NodeTypeBoolean";
import { INodeTypeNull, NodeTypeNull } from "@/business-logic/standards/especificacao/infrastructure/utils/nodes/schemas/NodeTypeNull";
import { INodeTypeObject, NodeTypeObject } from "@/business-logic/standards/especificacao/infrastructure/utils/nodes/schemas/NodeTypeObject";
import { INodeTypeString, NodeTypeString } from "@/business-logic/standards/especificacao/infrastructure/utils/nodes/schemas/NodeTypeString";
import * as valibot from "valibot";

export type INodeType = INodeTypeArray | INodeTypeBoolean | INodeTypeString | INodeTypeNull | INodeTypeObject;

export const NodeType = valibot.union([
  //
  NodeTypeArray,
  NodeTypeBoolean,
  NodeTypeString,
  NodeTypeNull,
  NodeTypeObject,
]);
