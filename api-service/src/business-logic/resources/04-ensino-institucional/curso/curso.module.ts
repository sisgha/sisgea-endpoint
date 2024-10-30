import { OfertaFormacaoModule } from "@/business-logic/resources/04-ensino-institucional/oferta-formacao/oferta-formacao.module";
import { Module } from "@nestjs/common";
import { CampusModule } from "../../02-ambientes/campus/campus.module";
import { CursoController } from "./curso.controller";
import { CursoResolver } from "./curso.resolver";
import { CursoService } from "./curso.service";

@Module({
  imports: [CampusModule, OfertaFormacaoModule],
  controllers: [CursoController],
  providers: [CursoService, CursoResolver],
  exports: [CursoService],
})
export class CursoModule {}
