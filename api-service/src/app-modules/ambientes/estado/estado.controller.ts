import { AccessContext, AccessContextHttp } from '@/access-context';
import { CombinedInput, Operation } from '@/app-standards';
import LadesaTypings from '@ladesa-ro/especificacao';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EstadoService } from './estado.service';

@ApiTags('Estados')
@Controller('/base/estados')
export class EstadoController {
  constructor(private estadoService: EstadoService) {}

  @Get('/')
  @Operation(LadesaTypings.Tokens.Estado.Operations.List)
  async findAll(
    //
    @AccessContextHttp() accessContext: AccessContext,
    @CombinedInput() dto: LadesaTypings.EstadoListCombinedInput,
  ): Promise<LadesaTypings.EstadoListCombinedSuccessOutput['body']> {
    return this.estadoService.findAll(accessContext, dto);
  }

  @Get('/:id')
  @Operation(LadesaTypings.Tokens.Estado.Operations.FindById)
  async findById(
    //
    @AccessContextHttp() accessContext: AccessContext,
    @CombinedInput() dto: LadesaTypings.EstadoFindByIDCombinedInput,
  ) {
    return this.estadoService.findByIdStrict(accessContext, { id: dto.params.id });
  }
}