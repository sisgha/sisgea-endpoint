import * as PocTypings from "@ladesa-ro/especificacao";

export type IRequestActor = null | Pick<PocTypings.Usuario, "id" | "nome" | "matriculaSiape" | "email" | "isSuperUser">;
