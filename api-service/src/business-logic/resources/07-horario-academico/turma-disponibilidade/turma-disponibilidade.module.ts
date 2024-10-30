import { TurmaModule } from "@/business-logic/resources/06-ensino-discente/turma/turma.module";
import { DisponibilidadeModule } from "@/business-logic/resources/07-horario-academico/disponibilidade/disponibilidade.module";
import { Module } from "@nestjs/common";
import { TurmaDisponibilidadeController } from "./turma-disponibilidade.controller";
import { TurmaDisponibilidadeResolver } from "./turma-disponibilidade.resolver";
import { TurmaDisponibilidadeService } from "./turma-disponibilidade.service";

@Module({
  imports: [TurmaModule, DisponibilidadeModule],
  controllers: [TurmaDisponibilidadeController],
  providers: [TurmaDisponibilidadeService, TurmaDisponibilidadeResolver],
  exports: [TurmaDisponibilidadeService],
})
export class TurmaDisponibilidadeModule {}
