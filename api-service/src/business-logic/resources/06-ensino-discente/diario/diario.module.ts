import { TurmaModule } from "@/business-logic/resources/06-ensino-discente/turma/turma.module";
import { Module } from "@nestjs/common";
import { AmbienteModule } from "../../02-ambientes/ambiente";
import { DisciplinaModule } from "../../04-ensino-institucional/disciplina/disciplina.module";
import { CalendarioLetivoModule } from "../../05-calendario/calendario-letivo/calendario-letivo.module";
import { DiarioController } from "./diario.controller";
import { DiarioResolver } from "./diario.resolver";
import { DiarioService } from "./diario.service";

@Module({
  imports: [CalendarioLetivoModule, TurmaModule, AmbienteModule, DisciplinaModule],
  controllers: [DiarioController],
  providers: [DiarioService, DiarioResolver],
  exports: [DiarioService],
})
export class DiarioModule {}
