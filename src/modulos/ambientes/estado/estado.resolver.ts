import { Info, Resolver } from '@nestjs/graphql';
import * as Spec from '@sisgea/spec';
import { IEstadoFindOneByIdInputDto, IEstadoFindOneByUfInputDto } from '@sisgea/spec';
import type { GraphQLResolveInfo } from 'graphql';
import getFieldNames from 'graphql-list-fields';
import { ContextoDeAcessoGraphQl, IContextoDeAcesso } from '../../../contexto-de-acesso';
import { DadosEntradaGql, Operacao } from '../../../especificacao';
import { EstadoService } from './estado.service';
@Resolver()
export class EstadoResolver {
  constructor(
    //
    private estadoService: EstadoService,
  ) {}

  // ========================================================

  @Operacao(Spec.EstadoFindAllOperator())
  async estadoFindAll(
    //
    @Info() info: GraphQLResolveInfo,
    @ContextoDeAcessoGraphQl() contextoDeAcesso: IContextoDeAcesso,
    @DadosEntradaGql(Spec.EstadoFindAllOperator()) dto: Spec.IPaginatedInputDto,
  ) {
    const selection = getFieldNames(info as any)
      .filter((i) => i.startsWith('data.'))
      .map((i) => i.slice(i.indexOf('.') + 1));

    return this.estadoService.findAll(contextoDeAcesso, dto, selection);
  }

  // ========================================================

  @Operacao(Spec.EstadoFindOneByUfOperator())
  async estadoFindOneByUf(
    @ContextoDeAcessoGraphQl() contextoDeAcesso: IContextoDeAcesso,
    @DadosEntradaGql(Spec.EstadoFindOneByUfOperator())
    dto: IEstadoFindOneByUfInputDto,
    @Info() info: GraphQLResolveInfo,
  ) {
    const selection = getFieldNames(info as any);
    return this.estadoService.findByUfStrict(contextoDeAcesso, dto, selection);
  }

  // ========================================================

  @Operacao(Spec.EstadoFindOneByIdOperator())
  async estadoFindOneById(
    @ContextoDeAcessoGraphQl() contextoDeAcesso: IContextoDeAcesso,
    @DadosEntradaGql(Spec.EstadoFindOneByIdOperator())
    dto: IEstadoFindOneByIdInputDto,
    @Info() info: GraphQLResolveInfo,
  ) {
    const selection = getFieldNames(info as any);
    return this.estadoService.findByIdStrict(contextoDeAcesso, dto, selection);
  }

  // ========================================================
}
