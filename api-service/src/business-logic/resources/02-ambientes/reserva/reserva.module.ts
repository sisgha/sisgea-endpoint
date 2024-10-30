import { Module } from "@nestjs/common";
import { UsuarioModule } from "../../01-autenticacao/usuario/usuario.module";
import { AmbienteModule } from "../ambiente/ambiente.module";
import { ReservaController } from "./reserva.controller";
import { ReservaResolver } from "./reserva.resolver";
import { ReservaService } from "./reserva.service";

@Module({
  imports: [UsuarioModule, AmbienteModule],
  controllers: [ReservaController],
  providers: [ReservaService, ReservaResolver],
  exports: [ReservaService],
})
export class ReservaModule {}
