import { Info, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import getFieldNames from 'graphql-list-fields';
import * as Dto from '../../(spec)';
import { IContextoDeAcesso } from '../../../../domain';
import { ContextoDeAcessoGraphQl, DtoOperationGqlMutation, DtoOperationGqlQuery } from '../../../../infrastructure';
import { GqlDtoInput } from '../../../../infrastructure/api-documentate/GqlDtoInput';
import { BlocoService } from './bloco.service';
import { BlocoDto, BlocoOperations } from './dtos';

@Resolver(() => BlocoDto)
export class BlocoResolver {
  constructor(
    //
    private blocoService: BlocoService,
  ) {}

  //

  @DtoOperationGqlQuery(BlocoOperations.BLOCO_FIND_ALL)
  async blocoFindAll(@ContextoDeAcessoGraphQl() contextoDeAcesso: IContextoDeAcesso, @GqlDtoInput(BlocoOperations.BLOCO_FIND_ALL) dto: Dto.ISearchInputDto, @Info() info: GraphQLResolveInfo) {
    const fields = getFieldNames(<any>info);
    return this.blocoService.blocoFindAll(contextoDeAcesso, dto, fields);
  }

  //

  @DtoOperationGqlQuery(BlocoOperations.BLOCO_FIND_ONE_BY_ID)
  async blocoFindOneById(
    @ContextoDeAcessoGraphQl() contextoDeAcesso: IContextoDeAcesso,
    @GqlDtoInput(BlocoOperations.BLOCO_FIND_ONE_BY_ID)
    dto: Dto.IBlocoFindOneByIdInputDto,
  ) {
    return this.blocoService.blocoFindByIdStrict(contextoDeAcesso, dto);
  }

  //

  @DtoOperationGqlMutation(BlocoOperations.BLOCO_CREATE)
  async blocoCreate(@ContextoDeAcessoGraphQl() contextoDeAcesso: IContextoDeAcesso, @GqlDtoInput(BlocoOperations.BLOCO_CREATE) dto: Dto.IBlocoInputDto) {
    return this.blocoService.blocoCreate(contextoDeAcesso, dto);
  }

  @DtoOperationGqlMutation(BlocoOperations.BLOCO_UPDATE)
  async blocoUpdate(@ContextoDeAcessoGraphQl() contextoDeAcesso: IContextoDeAcesso, @GqlDtoInput(BlocoOperations.BLOCO_UPDATE) dto: Dto.IBlocoUpdateDto) {
    return this.blocoService.blocoUpdate(contextoDeAcesso, dto);
  }

  @DtoOperationGqlMutation(BlocoOperations.BLOCO_DELETE_ONE_BY_ID)
  async blocoDeleteOneById(
    @ContextoDeAcessoGraphQl() contextoDeAcesso: IContextoDeAcesso,
    @GqlDtoInput(BlocoOperations.BLOCO_DELETE_ONE_BY_ID)
    dto: Dto.IBlocoDeleteOneByIdInputDto,
  ) {
    return this.blocoService.blocoDeleteOneById(contextoDeAcesso, dto);
  }
}