import { CampusModule } from "@/business-logic/resources/02-ambientes/campus/campus.module";
import { OfertaFormacaoModule } from "@/business-logic/resources/04-ensino-institucional/oferta-formacao/oferta-formacao.module";
import { Module } from "@nestjs/common";
import { GradeHorarioOfertaFormacaoController } from "./grade-horario-oferta-formacao.controller";
import { GradeHorarioOfertaFormacaoResolver } from "./grade-horario-oferta-formacao.resolver";
import { GradeHorarioOfertaFormacaoService } from "./grade-horario-oferta-formacao.service";

@Module({
  imports: [OfertaFormacaoModule, CampusModule],
  controllers: [GradeHorarioOfertaFormacaoController],
  providers: [GradeHorarioOfertaFormacaoService, GradeHorarioOfertaFormacaoResolver],
  exports: [GradeHorarioOfertaFormacaoService],
})
export class GradeHorarioOfertaFormacaoModule {}
