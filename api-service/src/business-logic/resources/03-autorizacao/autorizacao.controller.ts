import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AutorizacaoService } from "./autorizacao.service";

@ApiTags("Autorizacao")
@Controller("/autorizacao")
export class AutorizacaoController {
  constructor(readonly autorizacaoService: AutorizacaoService) {}
}
