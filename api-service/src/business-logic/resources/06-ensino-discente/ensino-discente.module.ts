import { AulaModule } from "@/business-logic/resources/06-ensino-discente/aula/aula.module";
import { DiarioProfessorModule } from "@/business-logic/resources/06-ensino-discente/diario-professor/diario-professor.module";
import { DiarioModule } from "@/business-logic/resources/06-ensino-discente/diario/diario.module";
import { TurmaModule } from "@/business-logic/resources/06-ensino-discente/turma/turma.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [TurmaModule, DiarioModule, DiarioProfessorModule, AulaModule],
})
export class EnsinoDiscenteModule {}
