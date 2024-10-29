import { CombinedInput } from "@/business-logic/standards";
import { Operation } from "@/business-logic/standards/especificacao/business-logic";
import { type AccessContext, AccessContextGraphQl } from "@/infrastructure/access-context";
import * as LadesaTypings from "@ladesa-ro/especificacao";
import { Tokens } from "@ladesa-ro/especificacao";
import { Resolver as GqlResolver } from "@nestjs/graphql";
import { VinculoService } from "./vinculo.service";

@GqlResolver()
export class VinculoResolver {
  constructor(
    //
    private vinculoService: VinculoService,
  ) {}

  //

  @Operation(Tokens.PerfilList)
  async vinculoFindAll(
    //
    @AccessContextGraphQl() accessContext: AccessContext,
    @CombinedInput() dto: LadesaTypings.PerfilListOperationInput,
  ) {
    return this.vinculoService.vinculoFindAll(accessContext, dto);
  }

  @Operation(Tokens.PerfilUpdateOneById)
  async vinculoSetVinculos(
    //
    @AccessContextGraphQl() accessContext: AccessContext,
    @CombinedInput() dto: LadesaTypings.PerfilUpdateOperationInput,
  ) {
    return this.vinculoService.vinculoSetVinculos(accessContext, dto);
  }
}
