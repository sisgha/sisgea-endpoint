import { CursoModule } from "@/business-logic/resources/04-ensino-institucional/curso/curso.module";
import { Module } from "@nestjs/common";
import { AmbienteModule } from "../../02-ambientes/ambiente/ambiente.module";
import { TurmaController } from "./turma.controller";
import { TurmaResolver } from "./turma.resolver";
import { TurmaService } from "./turma.service";

@Module({
  imports: [AmbienteModule, CursoModule],
  controllers: [TurmaController],
  providers: [TurmaService, TurmaResolver],
  exports: [TurmaService],
})
export class TurmaModule {}
