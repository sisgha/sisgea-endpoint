import * as LadesaTypings from "@ladesa-ro/especificacao";
import { IBaseAuthzCheck, IBaseAuthzFilter } from "./IBaseAuthz";

// ===================================================================================

export type IAuthzStatementEnderecoFind = IBaseAuthzFilter<"endereco:find">;

// =====================

export type IAuthzStatementEstadoFind = IBaseAuthzFilter<"estado:find">;
export type IAuthzStatementCidadeFind = IBaseAuthzFilter<"cidade:find">;

// =====================

export type IAuthzStatementCampusCreate = IBaseAuthzCheck<"campus:create", { dto: LadesaTypings.CampusCreateOperationInput }>;
export type IAuthzStatementCampusFind = IBaseAuthzFilter<"campus:find">;
export type IAuthzStatementCampusUpdate = IBaseAuthzFilter<"campus:update", { dto: LadesaTypings.CampusUpdateOperationInput }>;
export type IAuthzStatementCampusDelete = IBaseAuthzFilter<"campus:delete", { dto: LadesaTypings.CampusFindOneInputView }>;

// =====================

export type IAuthzStatementBlocoCreate = IBaseAuthzCheck<"bloco:create", { dto: LadesaTypings.BlocoCreateOperationInput }>;
export type IAuthzStatementBlocoFind = IBaseAuthzFilter<"bloco:find">;
export type IAuthzStatementBlocoUpdate = IBaseAuthzFilter<"bloco:update", { dto: LadesaTypings.BlocoUpdateByIdOperationInput }>;
export type IAuthzStatementBlocoDelete = IBaseAuthzFilter<"bloco:delete", { dto: LadesaTypings.BlocoFindOneInputView }>;

// =====================

export type IAuthzStatementAmbienteCreate = IBaseAuthzCheck<"ambiente:create", { dto: LadesaTypings.AmbienteCreateOperationInput }>;
export type IAuthzStatementAmbienteFind = IBaseAuthzFilter<"ambiente:find">;
export type IAuthzStatementAmbienteUpdate = IBaseAuthzFilter<"ambiente:update", { dto: LadesaTypings.AmbienteUpdateByIdOperationInput }>;
export type IAuthzStatementAmbienteDelete = IBaseAuthzFilter<"ambiente:delete", { dto: LadesaTypings.AmbienteFindOneInputView }>;

// =====================

export type IAuthzStatementUsuarioCreate = IBaseAuthzCheck<"usuario:create", { dto: LadesaTypings.UsuarioCreateOperationInput }>;
export type IAuthzStatementUsuarioFind = IBaseAuthzFilter<"usuario:find">;
export type IAuthzStatementUsuarioUpdate = IBaseAuthzFilter<"usuario:update", { dto: LadesaTypings.UsuarioUpdateByIdOperationInput }>;
export type IAuthzStatementUsuarioDelete = IBaseAuthzFilter<"usuario:delete", { dto: LadesaTypings.UsuarioFindOneInputView }>;

// =====================

export type IAuthzStatementModalidadeCreate = IBaseAuthzCheck<"modalidade:create", { dto: LadesaTypings.ModalidadeCreateOperationInput }>;
export type IAuthzStatementModalidadeFind = IBaseAuthzFilter<"modalidade:find">;
export type IAuthzStatementModalidadeUpdate = IBaseAuthzFilter<"modalidade:update", { dto: LadesaTypings.ModalidadeUpdateByIdOperationInput }>;
export type IAuthzStatementModalidadeDelete = IBaseAuthzFilter<"modalidade:delete", { dto: LadesaTypings.ModalidadeFindOneInputView }>;

// =====================

export type IAuthzStatementVinculoFind = IBaseAuthzFilter<"vinculo:find">;

// =====================

export type IAuthzStatementCursoCreate = IBaseAuthzCheck<"curso:create", { dto: LadesaTypings.CursoCreateOperationInput }>;
export type IAuthzStatementCursoUpdate = IBaseAuthzFilter<"curso:update", { dto: LadesaTypings.CursoUpdateByIdOperationInput }>;
export type IAuthzStatementCursoDelete = IBaseAuthzFilter<"curso:delete", { dto: LadesaTypings.CursoFindOneInputView }>;
export type IAuthzStatementCursoFind = IBaseAuthzFilter<"curso:find">;

// =====================

export type IAuthzStatementDisciplinaCreate = IBaseAuthzCheck<"disciplina:create", { dto: LadesaTypings.DisciplinaCreateOperationInput }>;
export type IAuthzStatementDisciplinaUpdate = IBaseAuthzFilter<"disciplina:update", { dto: LadesaTypings.DisciplinaUpdateByIdOperationInput }>;
export type IAuthzStatementDisciplinaDelete = IBaseAuthzFilter<"disciplina:delete", { dto: LadesaTypings.DisciplinaFindOneInputView }>;
export type IAuthzStatementDisciplinaFind = IBaseAuthzFilter<"disciplina:find">;

// =====================

export type IAuthzStatementTurmaCreate = IBaseAuthzCheck<"turma:create", { dto: LadesaTypings.TurmaCreateOperationInput }>;
export type IAuthzStatementTurmaUpdate = IBaseAuthzFilter<"turma:update", { dto: LadesaTypings.TurmaUpdateByIdOperationInput }>;
export type IAuthzStatementTurmaDelete = IBaseAuthzFilter<"turma:delete", { dto: LadesaTypings.TurmaFindOneInputView }>;
export type IAuthzStatementTurmaFind = IBaseAuthzFilter<"turma:find">;

// =====================

export type IAuthzStatementDiarioCreate = IBaseAuthzCheck<"diario:create", { dto: LadesaTypings.DiarioCreateOperationInput }>;
export type IAuthzStatementDiarioUpdate = IBaseAuthzFilter<"diario:update", { dto: LadesaTypings.DiarioUpdateByIdOperationInput }>;
export type IAuthzStatementDiarioDelete = IBaseAuthzFilter<"diario:delete", { dto: LadesaTypings.DiarioFindOneInputView }>;
export type IAuthzStatementDiarioFind = IBaseAuthzFilter<"diario:find">;

// =====================

export type IAuthzStatementReservaCreate = IBaseAuthzCheck<"reserva:create", { dto: LadesaTypings.ReservaCreateOperationInput }>;
export type IAuthzStatementReservaUpdate = IBaseAuthzFilter<"reserva:update", { dto: LadesaTypings.ReservaUpdateByIdOperationInput }>;
export type IAuthzStatementReservaDelete = IBaseAuthzFilter<"reserva:delete", { dto: LadesaTypings.ReservaFindOneInputView }>;
export type IAuthzStatementReservaFind = IBaseAuthzFilter<"reserva:find">;

// =====================

export type IAuthzStatementCalendarioLetivoCreate = IBaseAuthzCheck<"calendario_letivo:create", { dto: LadesaTypings.CalendarioLetivoCreateOperationInput }>;
export type IAuthzStatementCalendarioLetivoUpdate = IBaseAuthzFilter<"calendario_letivo:update", { dto: LadesaTypings.CalendarioLetivoUpdateByIdOperationInput }>;
export type IAuthzStatementCalendarioLetivoDelete = IBaseAuthzFilter<"calendario_letivo:delete", { dto: LadesaTypings.CalendarioLetivoFindOneInputView }>;
export type IAuthzStatementCalendarioLetivoFind = IBaseAuthzFilter<"calendario_letivo:find">;

// =====================

export type IAuthzStatementDiarioProfessorCreate = IBaseAuthzCheck<"diario_professor:create", { dto: LadesaTypings.DiarioProfessorCreateOperationInput }>;

export type IAuthzStatementDiarioProfessorUpdate = IBaseAuthzFilter<"diario_professor:update", { dto: LadesaTypings.DiarioProfessorUpdateByIdOperationInput }>;

export type IAuthzStatementDiarioProfessorDelete = IBaseAuthzFilter<"diario_professor:delete", { dto: LadesaTypings.DiarioProfessorFindOneInputView }>;

export type IAuthzStatementDiarioProfessorFilter = IBaseAuthzFilter<"diario_professor:find">;

// =====================

export type IAuthzStatementEventoCreate = IBaseAuthzCheck<"evento:create", { dto: LadesaTypings.EventoCreateOperationInput }>;
export type IAuthzStatementEventoUpdate = IBaseAuthzFilter<"evento:update", { dto: LadesaTypings.EventoUpdateByIdOperationInput }>;
export type IAuthzStatementEventoDelete = IBaseAuthzFilter<"evento:delete", { dto: LadesaTypings.EventoFindOneInputView }>;
export type IAuthzStatementEventoFind = IBaseAuthzFilter<"evento:find">;

// =====================

export type IAuthzStatementDiaCalendarioCreate = IBaseAuthzCheck<"dia_calendario:create", { dto: LadesaTypings.DiaCalendarioCreateOperationInput }>;
export type IAuthzStatementDiaCalendarioUpdate = IBaseAuthzFilter<"dia_calendario:update", { dto: LadesaTypings.DiaCalendarioUpdateByIdOperationInput }>;
export type IAuthzStatementDiaCalendarioDelete = IBaseAuthzFilter<"dia_calendario:delete", { dto: LadesaTypings.DiaCalendarioFindOneInputView }>;
export type IAuthzStatementDiaCalendarioFind = IBaseAuthzFilter<"dia_calendario:find">;

// =====================

export type IAuthzStatementEtapaCreate = IBaseAuthzCheck<"etapa:create", { dto: LadesaTypings.EtapaCreateOperationInput }>;
export type IAuthzStatementEtapaUpdate = IBaseAuthzFilter<"etapa:update", { dto: LadesaTypings.EtapaUpdateByIdOperationInput }>;
export type IAuthzStatementEtapaDelete = IBaseAuthzFilter<"etapa:delete", { dto: LadesaTypings.EtapaFindOneInputView }>;
export type IAuthzStatementEtapaFind = IBaseAuthzFilter<"etapa:find">;

// =====================

export type IAuthzStatementAulaCreate = IBaseAuthzCheck<"aula:create", { dto: LadesaTypings.AulaCreateOperationInput }>;
export type IAuthzStatementAulaUpdate = IBaseAuthzFilter<"aula:update", { dto: LadesaTypings.AulaUpdateByIdOperationInput }>;
export type IAuthzStatementAulaDelete = IBaseAuthzFilter<"aula:delete", { dto: LadesaTypings.AulaFindOneInputView }>;
export type IAuthzStatementAulaFind = IBaseAuthzFilter<"aula:find">;

// =====================

export type IAuthzStatementDiarioPreferenciaAgrupamentoCreate = IBaseAuthzCheck<"diario_preferencia_agrupamento:create", { dto: LadesaTypings.DiarioPreferenciaAgrupamentoCreateOperationInput }>;
export type IAuthzStatementDiarioPreferenciaAgrupamentoUpdate = IBaseAuthzFilter<"diario_preferencia_agrupamento:update", { dto: LadesaTypings.DiarioPreferenciaAgrupamentoUpdateByIdOperationInput }>;
export type IAuthzStatementDiarioPreferenciaAgrupamentoDelete = IBaseAuthzFilter<"diario_preferencia_agrupamento:delete", { dto: LadesaTypings.DiarioPreferenciaAgrupamentoFindOneInputView }>;
export type IAuthzStatementDiarioPreferenciaAgrupamentoFind = IBaseAuthzFilter<"diario_preferencia_agrupamento:find">;

// =====================

export type IAuthzStatementHorarioGeradoCreate = IBaseAuthzCheck<"horario_gerado:create", { dto: LadesaTypings.HorarioGeradoCreateOperationInput }>;
export type IAuthzStatementHorarioGeradoUpdate = IBaseAuthzFilter<"horario_gerado:update", { dto: LadesaTypings.HorarioGeradoUpdateByIdOperationInput }>;
export type IAuthzStatementHorarioGeradoDelete = IBaseAuthzFilter<"horario_gerado:delete", { dto: LadesaTypings.HorarioGeradoFindOneInputView }>;
export type IAuthzStatementHorarioGeradoFind = IBaseAuthzFilter<"horario_gerado:find">;

// =====================

export type IAuthzStatementHorarioGeradoAulaCreate = IBaseAuthzCheck<"horario_gerado_aula:create", { dto: LadesaTypings.HorarioGeradoAulaCreateOperationInput }>;
export type IAuthzStatementHorarioGeradoAulaUpdate = IBaseAuthzFilter<"horario_gerado_aula:update", { dto: LadesaTypings.HorarioGeradoAulaUpdateByIdOperationInput }>;
export type IAuthzStatementHorarioGeradoAulaDelete = IBaseAuthzFilter<"horario_gerado_aula:delete", { dto: LadesaTypings.HorarioGeradoAulaFindOneInputView }>;
export type IAuthzStatementHorarioGeradoAulaFind = IBaseAuthzFilter<"horario_gerado_aula:find">;

// ===================================================================================

export type IAuthzStatementCheck =
  | IAuthzStatementCampusCreate
  | IAuthzStatementBlocoCreate
  | IAuthzStatementAmbienteCreate
  | IAuthzStatementUsuarioCreate
  | IAuthzStatementModalidadeCreate
  | IAuthzStatementCursoCreate
  | IAuthzStatementDisciplinaCreate
  | IAuthzStatementTurmaCreate
  | IAuthzStatementCalendarioLetivoCreate
  | IAuthzStatementDiarioCreate
  | IAuthzStatementReservaCreate
  | IAuthzStatementDiarioProfessorCreate
  | IAuthzStatementEventoCreate
  | IAuthzStatementDiaCalendarioCreate
  | IAuthzStatementEtapaCreate
  | IAuthzStatementAulaCreate
  | IAuthzStatementDiarioPreferenciaAgrupamentoCreate
  | IAuthzStatementHorarioGeradoCreate
  | IAuthzStatementHorarioGeradoAulaCreate;

// =====================

export type IAuthzStatementFilter =
  //
  | IAuthzStatementEnderecoFind
  | IAuthzStatementEstadoFind
  | IAuthzStatementCidadeFind
  | IAuthzStatementCampusFind
  | IAuthzStatementCampusUpdate
  | IAuthzStatementCampusDelete
  | IAuthzStatementBlocoFind
  | IAuthzStatementBlocoUpdate
  | IAuthzStatementBlocoDelete
  | IAuthzStatementModalidadeFind
  | IAuthzStatementModalidadeUpdate
  | IAuthzStatementModalidadeDelete
  | IAuthzStatementAmbienteFind
  | IAuthzStatementAmbienteUpdate
  | IAuthzStatementAmbienteDelete
  | IAuthzStatementUsuarioFind
  | IAuthzStatementUsuarioUpdate
  | IAuthzStatementUsuarioDelete
  | IAuthzStatementVinculoFind
  | IAuthzStatementCursoDelete
  | IAuthzStatementCursoFind
  | IAuthzStatementCursoUpdate
  | IAuthzStatementDisciplinaUpdate
  | IAuthzStatementDisciplinaDelete
  | IAuthzStatementDisciplinaFind
  | IAuthzStatementTurmaUpdate
  | IAuthzStatementTurmaDelete
  | IAuthzStatementTurmaFind
  | IAuthzStatementDiarioUpdate
  | IAuthzStatementDiarioDelete
  | IAuthzStatementDiarioFind
  | IAuthzStatementReservaUpdate
  | IAuthzStatementReservaDelete
  | IAuthzStatementReservaFind
  | IAuthzStatementCalendarioLetivoDelete
  | IAuthzStatementCalendarioLetivoFind
  | IAuthzStatementCalendarioLetivoUpdate
  | IAuthzStatementDiarioProfessorUpdate
  | IAuthzStatementDiarioProfessorDelete
  | IAuthzStatementDiarioProfessorFilter
  | IAuthzStatementEventoFind
  | IAuthzStatementEventoUpdate
  | IAuthzStatementEventoDelete
  | IAuthzStatementDiaCalendarioFind
  | IAuthzStatementDiaCalendarioUpdate
  | IAuthzStatementDiaCalendarioDelete
  | IAuthzStatementEtapaUpdate
  | IAuthzStatementEtapaFind
  | IAuthzStatementEtapaDelete
  | IAuthzStatementAulaUpdate
  | IAuthzStatementAulaDelete
  | IAuthzStatementAulaFind
  | IAuthzStatementDiarioPreferenciaAgrupamentoUpdate
  | IAuthzStatementDiarioPreferenciaAgrupamentoFind
  | IAuthzStatementDiarioPreferenciaAgrupamentoDelete
  | IAuthzStatementHorarioGeradoUpdate
  | IAuthzStatementHorarioGeradoFind
  | IAuthzStatementHorarioGeradoDelete
  | IAuthzStatementHorarioGeradoAulaUpdate
  | IAuthzStatementHorarioGeradoAulaDelete
  | IAuthzStatementHorarioGeradoAulaFind;

// =====================

export type IAuthzStatement = IAuthzStatementFilter | IAuthzStatementCheck;

// ===================================================================================

export const createStatement = <Statement extends IAuthzStatement>(statement: Omit<Statement, "payload">) => statement as Statement;

// ===================================================================================
