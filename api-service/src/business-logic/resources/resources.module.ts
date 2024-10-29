import { BaseLugaresModule } from "@/business-logic/resources/00-01-base-lugares/base-lugares.module";
import { AutorizacaoModule } from "@/business-logic/resources/03-autorizacao/autorizacao.module";
import { EnsinoDiscenteModule } from "@/business-logic/resources/06-ensino-discente/ensino-discente.module";
import { Module } from "@nestjs/common";
import { BaseModule } from "./00-00-base/base.module";
import { AutenticacaoModule } from "./01-autenticacao/autenticacao.module";
import { AmbientesModule } from "./02-ambientes/ambientes.module";
import { EnsinoInstitucionalModule } from "./04-ensino-institucional/ensino-institucional.module";
import { CalendarioModule } from "./05-calendario/calendario.module";
import { HorarioAcademicoModule } from "./07-horario-academico/horario-academico.module";
//import { GerarHorarioModule } from './gerar-horario/gerar-horario.module';

@Module({
  imports: [
    //
    BaseModule,
    BaseLugaresModule,
    AutenticacaoModule,
    AmbientesModule,
    AutorizacaoModule,
    EnsinoInstitucionalModule,
    CalendarioModule,
    EnsinoDiscenteModule,
    HorarioAcademicoModule,
    /*GerarHorarioModule*/
  ],
})
export class ResourcesModule {}
