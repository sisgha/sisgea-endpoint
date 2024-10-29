import { CombinedInput } from "@/business-logic/standards";
import { Operation } from "@/business-logic/standards/especificacao/business-logic";
import { type AccessContext, AccessContextHttp } from "@/infrastructure/access-context";
import * as LadesaTypings from "@ladesa-ro/especificacao";
import { Tokens } from "@ladesa-ro/especificacao";
import { Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { VinculoService } from "./vinculo.service";

@Controller("/vinculos")
@ApiTags("Vinculos")
export class VinculoController {
  constructor(private vinculoService: VinculoService) {}

  @Get("/")
  @Operation(Tokens.PerfilList)
  async findAll(
    //
    @AccessContextHttp() accessContext: AccessContext,
    @CombinedInput() dto: LadesaTypings.PerfilListOperationInput,
  ) {
    return this.vinculoService.vinculoFindAll(accessContext, dto);
  }

  @Post("/")
  @Operation(Tokens.PerfilUpdateOneById)
  async vinculoSetVinculos(
    //
    @AccessContextHttp() accessContext: AccessContext,
    @CombinedInput() dto: LadesaTypings.PerfilUpdateOperationInput,
  ) {
    return this.vinculoService.vinculoSetVinculos(accessContext, dto);
  }
}
