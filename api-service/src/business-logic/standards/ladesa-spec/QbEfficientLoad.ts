import { CheckNodeTypeArray, CheckNodeTypeObjectEntity, INodeTypeObjectEntity, ISpecNodesStore, getSpecNodesStore } from "@/business-logic/standards/especificacao";
import { uniq } from "lodash";
import { SelectQueryBuilder } from "typeorm";

// ==========================

export const QbEfficientLoadForEntity = (repository: ISpecNodesStore, nodeEntity: INodeTypeObjectEntity, qb: SelectQueryBuilder<any>, alias: string, selection: boolean | string[] = true) => {
  let counter = 0;

  let rootSelection: boolean | string[] = [];

  if (typeof selection === "boolean") {
    rootSelection = selection;
  } else {
    rootSelection = uniq(["id", ...selection.map((i) => i.split(".")[0])]);
  }

  const metadata = qb.expressionMap.findAliasByName(alias).metadata;

  const propertiesMap = metadata.propertiesMap;

  for (const [propertyKey, propertyNode] of Object.entries(nodeEntity.properties)) {
    counter++;

    if (!Object.hasOwn(propertiesMap, propertyKey)) {
      console.warn(`-> entity ${metadata.name} dont have path ${propertyKey}.`);
      continue;
    }

    if (!rootSelection) {
      continue;
    }

    const includeProperty = Array.isArray(rootSelection) ? rootSelection.includes(propertyKey) : rootSelection;

    if (!includeProperty) {
      continue;
    }

    const subPath = `${alias}.${propertyKey}`;

    let { node: propertyNodeComposed } = repository.Compose(propertyNode);

    if (CheckNodeTypeArray(propertyNodeComposed)) {
      propertyNodeComposed = repository.Compose(propertyNodeComposed.items);
    }

    if (CheckNodeTypeObjectEntity(propertyNodeComposed)) {
      const propertyNodeEntityId = propertyNodeComposed["x-unispec-entity-id"];

      const childSelection = rootSelection === true ? true : uniq(rootSelection.filter((i) => i.startsWith(`${propertyKey}.`)).map((i) => i.slice(i.indexOf(".") + 1)));

      const childAlias = `${alias}_${propertyKey[0]}${counter}`;

      qb.leftJoin(subPath, childAlias);
      QbEfficientLoad(propertyNodeEntityId, qb, childAlias, childSelection);
    } else {
      qb.addSelect(subPath);
    }
  }
};

export const QbEfficientLoad = (entityId: string, qb: SelectQueryBuilder<any>, alias: string, selection: boolean | string[] = true) => {
  const store = getSpecNodesStore();

  const targetEntity = store.GetEntityNode(entityId);

  if (CheckNodeTypeObjectEntity(targetEntity)) {
    return QbEfficientLoadForEntity(store, targetEntity, qb, alias, selection);
  }
};
