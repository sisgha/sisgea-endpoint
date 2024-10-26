import { INode, Node } from "@/business-logic/standards/especificacao/infrastructure/utils/nodes/schemas/Node";
import * as valibot from "valibot";

export type INestedNode = INode;

export const NestedNode = valibot.lazy(() => Node);
