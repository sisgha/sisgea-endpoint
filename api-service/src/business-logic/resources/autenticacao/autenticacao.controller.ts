import { CombinedInput } from "@/business-logic/standards";
import { PocOperation } from "@/business-logic/standards/especificacao/business-logic";
import { type AccessContext, AccessContextHttp } from "@/infrastructure/access-context";
import { Public } from "@/infrastructure/authentication";
import * as PocTypings from "@ladesa-ro/especificacao";
import { Tokens as PocTokens } from "@ladesa-ro/especificacao";
import { Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AutenticacaoService } from "./autenticacao.service";

@ApiTags("Autenticacao")
@Controller("/autenticacao")
export class AutenticacaoController {
  constructor(private readonly autenticacaoService: AutenticacaoService) {}

  @Get("/quem-sou-eu")
  @PocOperation(PocTokens.AuthWhoAmI)
  whoAmI(
    //
    @AccessContextHttp() accessContext: AccessContext,
  ) {
    return this.autenticacaoService.whoAmI(accessContext);
  }

  @Post("/login")
  @Public()
  @PocOperation(PocTokens.AuthLogin)
  login(
    //
    @AccessContextHttp() accessContext: AccessContext,
    @CombinedInput() dto: PocTypings.AuthLoginOperationInput,
  ) {
    return this.autenticacaoService.login(accessContext, dto);
  }

  @Post("/login/refresh")
  @Public()
  @PocOperation(PocTokens.AuthRefresh)
  refresh(
    //
    @AccessContextHttp() accessContext: AccessContext,
    @CombinedInput() dto: PocTypings.AuthRefreshOperationInput,
  ) {
    return this.autenticacaoService.refresh(accessContext, dto);
  }

  @Post("/definir-senha")
  @PocOperation(PocTokens.AuthSetInitialPassword)
  definirSenha(
    //
    @AccessContextHttp() accessContext: AccessContext,
    @CombinedInput() dto: PocTypings.AuthCredentialsSetInitialPasswordOperationInput,
  ) {
    return this.autenticacaoService.definirSenha(accessContext, dto);
  }
}
