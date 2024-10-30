import { Module } from "@nestjs/common";
import { UsuarioModule } from "../../01-autenticacao/usuario/usuario.module";
import { CampusModule } from "../../02-ambientes/campus/campus.module";
import { PerfilController } from "./perfil.controller";
import { PerfilResolver } from "./perfil.resolver";
import { PerfilService } from "./perfil.service";

@Module({
  imports: [UsuarioModule, CampusModule],
  controllers: [PerfilController],
  providers: [PerfilService, PerfilResolver],
  exports: [PerfilService],
})
export class PerfilModule {}
