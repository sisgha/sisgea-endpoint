import { IComposedResult } from "@/business-logic/standards/especificacao/business-logic/SpecNodesStore/Sources";
import { INode, INodeCore, INodeRef, INodeTypeObjectEntity, INodeTypeObjectOperation } from "@/business-logic/standards/especificacao/infrastructure";

export interface ISpecNodesStore {
  GetNodeWithId(name: string): INode;
  GetEntityNode(name: string): INodeTypeObjectEntity;
  GetOperationNode(name: string): INodeTypeObjectOperation;

  Compose(initialCursor: string | INodeRef | INodeCore): IComposedResult;

  ComposeNestedRefs(initialCursor: string | INodeRef | INodeCore): INodeCore;

  ComposeAnyOf(rawAnyOf?: INode[]):
    | {
        node: INode;
        nullable: boolean;
      }
    | {
        node: null;
        nullable: boolean;
      };

  GetNestedRefs(initialCursor: string | INodeRef | INodeCore): (INodeCore | INodeRef)[];
}
