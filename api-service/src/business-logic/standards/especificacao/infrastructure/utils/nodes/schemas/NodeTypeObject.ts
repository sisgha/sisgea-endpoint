import { INodeTypeObjectBase, NodeTypeObjectBase } from "@/business-logic/standards/especificacao/infrastructure/utils/nodes/schemas/NodeTypeObjectBase";
import { INodeTypeObjectEntity, NodeTypeObjectEntity } from "@/business-logic/standards/especificacao/infrastructure/utils/nodes/schemas/NodeTypeObjectEntity";
import { INodeTypeObjectOperation, NodeTypeObjectOperation } from "@/business-logic/standards/especificacao/infrastructure/utils/nodes/schemas/NodeTypeObjectOperation";
import { BuildCheckType } from "@/business-logic/standards/especificacao/infrastructure/utils/nodes/schemas/helpers";
import * as valibot from "valibot";

export type INodeTypeObject = INodeTypeObjectBase | INodeTypeObjectEntity | INodeTypeObjectOperation;

export const NodeTypeObject = valibot.variant("x-unispec-kind", [
  //
  NodeTypeObjectBase,
  NodeTypeObjectEntity,
  NodeTypeObjectOperation,
]);

export const CheckNodeTypeObject = BuildCheckType<any, INodeTypeObject>(NodeTypeObject);
