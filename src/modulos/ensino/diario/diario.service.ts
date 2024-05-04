import { Injectable, NotFoundException } from '@nestjs/common';
import * as Spec from '@sisgea/spec';
import { has, map, pick } from 'lodash';
import { FilterOperator } from 'nestjs-paginate';
import { SelectQueryBuilder } from 'typeorm';
import { busca, getPaginatedResultDto } from '../../../busca';
import { IContextoDeAcesso } from '../../../contexto-de-acesso';
import { DatabaseContextService } from '../../../integracao-banco-de-dados';
import { DiarioEntity } from '../../../integracao-banco-de-dados/typeorm/entities';
import { IQueryBuilderViewOptionsLoad, getQueryBuilderViewLoadMeta, paginateConfig } from '../../../legacy/utils';
import { AmbienteService, IAmbienteQueryBuilderViewOptions } from '../../ambientes/ambiente/ambiente.service';
import { DisciplinaService, IDisciplinaQueryBuilderViewOptions } from '../disciplina/disciplina.service';
import { ITurmaQueryBuilderViewOptions, TurmaService } from '../turma/turma.service';

// ============================================================================

const aliasDiario = 'diario';

// ============================================================================

export type IDiarioQueryBuilderViewOptions = {
  loadTurma?: IQueryBuilderViewOptionsLoad<ITurmaQueryBuilderViewOptions>;
  loadDisciplina?: IQueryBuilderViewOptionsLoad<IDisciplinaQueryBuilderViewOptions>;
  loadAmbientePadrao?: IQueryBuilderViewOptionsLoad<IAmbienteQueryBuilderViewOptions>;
};

// ============================================================================

@Injectable()
export class DiarioService {
  constructor(
    private databaseContext: DatabaseContextService,
    private turmaService: TurmaService,
    private disciplinaService: DisciplinaService,
    private ambienteService: AmbienteService,
  ) {}

  get diarioRepository() {
    return this.databaseContext.diarioRepository;
  }

  //

  static DiarioQueryBuilderView(alias: string, qb: SelectQueryBuilder<any>, options: IDiarioQueryBuilderViewOptions = {}) {
    qb.addSelect([`${alias}.id`, `${alias}.situacao`, `${alias}.ano`, `${alias}.etapa`]);

    const loadAmbientePadrao = getQueryBuilderViewLoadMeta(options.loadAmbientePadrao, true, `${alias}_ap`);

    if (loadAmbientePadrao) {
      qb.leftJoin(`${alias}.ambientePadrao`, `${loadAmbientePadrao.alias}`);
      AmbienteService.AmbienteQueryBuilderView(loadAmbientePadrao.alias, qb, loadAmbientePadrao.options);
    }

    const loadDisciplina = getQueryBuilderViewLoadMeta(options.loadDisciplina, true, `${alias}_d`);

    if (loadDisciplina) {
      qb.leftJoin(`${alias}.disciplina`, `${loadDisciplina.alias}`);
      DisciplinaService.DisciplinaQueryBuilderView(loadDisciplina.alias, qb, loadDisciplina.options);
    }

    const loadTurma = getQueryBuilderViewLoadMeta(options.loadTurma, true, `${alias}_t`);

    if (loadTurma) {
      qb.leftJoin(`${alias}.turma`, `${loadTurma.alias}`);
      TurmaService.TurmaQueryBuilderView(loadTurma.alias, qb, loadTurma.options);
    }
  }

  //

  async diarioFindAll(contextoDeAcesso: IContextoDeAcesso, dto: Spec.IPaginatedInputDto | null = null): Promise<Spec.IDiarioFindAllResultDto> {
    // =========================================================

    const qb = this.diarioRepository.createQueryBuilder(aliasDiario);

    // =========================================================

    await contextoDeAcesso.aplicarFiltro('diario:find', qb, aliasDiario, null);

    // =========================================================

    const paginated = await busca('#/', dto, qb, {
      ...paginateConfig,
      select: [
        //
        'id',
        //
        'situacao',
        'ano',
        'etapa',
        //
        'turma.id',
        'turma.periodo',
        'disciplina.id',
        'disciplina.nome',
        'ambientePadrao.id',
        'ambientePadrao.nome',
        //
      ],
      sortableColumns: [
        //
        'situacao',
        'ano',
        'etapa',
        //
        'disciplina.nome',
        'ambientePadrao.nome',
      ],
      relations: {
        turma: true,
        disciplina: true,
        ambientePadrao: true,
      },
      searchableColumns: [
        //
        'id',
        //
        'situacao',
        'ano',
        'etapa',
        'turma.periodo',
        'disciplina.nome',
        //
      ],
      defaultSortBy: [],
      filterableColumns: {
        'turma.id': [FilterOperator.EQ],
        'disciplina.id': [FilterOperator.EQ],
        'ambientePadrao.id': [FilterOperator.EQ],
      },
    });

    // =========================================================

    qb.select([]);

    DiarioService.DiarioQueryBuilderView(aliasDiario, qb, {});

    // =========================================================

    const pageItemsView = await qb.andWhereInIds(map(paginated.data, 'id')).getMany();
    paginated.data = paginated.data.map((paginated) => pageItemsView.find((i) => i.id === paginated.id)!);

    // =========================================================

    return getPaginatedResultDto(paginated);
  }

  async diarioFindById(contextoDeAcesso: IContextoDeAcesso, dto: Spec.IDiarioFindOneByIdInputDto): Promise<Spec.IDiarioFindOneResultDto | null> {
    // =========================================================

    const qb = this.diarioRepository.createQueryBuilder(aliasDiario);

    // =========================================================

    await contextoDeAcesso.aplicarFiltro('diario:find', qb, aliasDiario, null);

    // =========================================================

    qb.andWhere(`${aliasDiario}.id = :id`, { id: dto.id });

    // =========================================================

    qb.select([]);

    DiarioService.DiarioQueryBuilderView(aliasDiario, qb, {});

    // =========================================================

    const diario = await qb.getOne();

    // =========================================================

    return diario;
  }

  async diarioFindByIdStrict(contextoDeAcesso: IContextoDeAcesso, dto: Spec.IDiarioFindOneByIdInputDto) {
    const diario = await this.diarioFindById(contextoDeAcesso, dto);

    if (!diario) {
      throw new NotFoundException();
    }

    return diario;
  }

  async diarioFindByIdSimple(
    contextoDeAcesso: IContextoDeAcesso,
    id: Spec.IDiarioFindOneByIdInputDto['id'],
    options?: IDiarioQueryBuilderViewOptions,
    selection?: string[],
  ): Promise<Spec.IDiarioFindOneResultDto | null> {
    // =========================================================

    const qb = this.diarioRepository.createQueryBuilder(aliasDiario);

    // =========================================================

    await contextoDeAcesso.aplicarFiltro('diario:find', qb, aliasDiario, null);

    // =========================================================

    qb.andWhere(`${aliasDiario}.id = :id`, { id });

    // =========================================================

    qb.select([]);

    DiarioService.DiarioQueryBuilderView(aliasDiario, qb, {
      ...options,
    });

    if (selection) {
      qb.select(selection);
    }

    // =========================================================

    const diario = await qb.getOne();

    // =========================================================

    return diario;
  }

  async diarioFindByIdSimpleStrict(contextoDeAcesso: IContextoDeAcesso, id: Spec.IDiarioFindOneByIdInputDto['id'], options?: IDiarioQueryBuilderViewOptions, selection?: string[]) {
    const diario = await this.diarioFindByIdSimple(contextoDeAcesso, id, options, selection);

    if (!diario) {
      throw new NotFoundException();
    }

    return diario;
  }

  //

  async diarioCreate(contextoDeAcesso: IContextoDeAcesso, dto: Spec.IDiarioInputDto) {
    // =========================================================

    await contextoDeAcesso.ensurePermission('diario:create', { dto });

    // =========================================================

    const dtoDiario = pick(dto, ['situacao', 'ano', 'etapa']);

    const diario = this.diarioRepository.create();

    this.diarioRepository.merge(diario, {
      ...dtoDiario,
    });

    // =========================================================

    if (dto.ambientePadrao !== null) {
      const ambientePadrao = await this.ambienteService.ambienteFindByIdStrict(contextoDeAcesso, { id: dto.ambientePadrao.id });

      this.diarioRepository.merge(diario, {
        ambientePadrao: {
          id: ambientePadrao.id,
        },
      });
    } else {
      this.diarioRepository.merge(diario, {
        ambientePadrao: null,
      });
    }

    // =========================================================

    const disciplina = await this.disciplinaService.disciplinaFindByIdSimpleStrict(contextoDeAcesso, dto.disciplina.id);

    this.diarioRepository.merge(diario, {
      disciplina: {
        id: disciplina.id,
      },
    });

    // =========================================================

    const turma = await this.turmaService.turmaFindByIdSimpleStrict(contextoDeAcesso, dto.turma.id);

    this.diarioRepository.merge(diario, {
      turma: {
        id: turma.id,
      },
    });

    // =========================================================

    await this.diarioRepository.save(diario);

    // =========================================================

    return this.diarioFindByIdStrict(contextoDeAcesso, { id: diario.id });
  }

  async diarioUpdate(contextoDeAcesso: IContextoDeAcesso, dto: Spec.IDiarioUpdateDto) {
    // =========================================================

    const currentDiario = await this.diarioFindByIdStrict(contextoDeAcesso, {
      id: dto.id,
    });

    // =========================================================

    await contextoDeAcesso.ensurePermission('diario:update', { dto }, dto.id, this.diarioRepository.createQueryBuilder(aliasDiario));

    const dtoDiario = pick(dto, ['situacao', 'ano', 'etapa', 'turma', 'disciplina', 'ambientePadrao']);

    const diario = {
      id: currentDiario.id,
    } as DiarioEntity;

    this.diarioRepository.merge(diario, {
      ...dtoDiario,
    });

    // =========================================================

    if (has(dto, 'ambientePadrao') && dto.ambientePadrao !== undefined) {
      if (dto.ambientePadrao !== null) {
        const ambientePadrao = await this.ambienteService.ambienteFindByIdStrict(contextoDeAcesso, { id: dto.ambientePadrao.id });

        this.diarioRepository.merge(diario, {
          ambientePadrao: {
            id: ambientePadrao.id,
          },
        });
      } else {
        this.diarioRepository.merge(diario, {
          ambientePadrao: null,
        });
      }
    }

    // =========================================================

    if (has(dto, 'disciplina') && dto.disciplina !== undefined) {
      const disciplina = await this.disciplinaService.disciplinaFindByIdSimpleStrict(contextoDeAcesso, dto.disciplina.id);

      this.diarioRepository.merge(diario, {
        disciplina: {
          id: disciplina.id,
        },
      });
    }

    // =========================================================

    if (has(dto, 'turma') && dto.turma !== undefined) {
      const turma = await this.turmaService.turmaFindByIdSimpleStrict(contextoDeAcesso, dto.turma.id);

      this.diarioRepository.merge(diario, {
        turma: {
          id: turma.id,
        },
      });
    }

    // =========================================================

    await this.diarioRepository.save(diario);

    // =========================================================

    return this.diarioFindByIdStrict(contextoDeAcesso, { id: diario.id });
  }

  //

  async diarioDeleteOneById(contextoDeAcesso: IContextoDeAcesso, dto: Spec.IDiarioDeleteOneByIdInputDto) {
    // =========================================================

    await contextoDeAcesso.ensurePermission('diario:delete', { dto }, dto.id, this.diarioRepository.createQueryBuilder(aliasDiario));

    // =========================================================

    const diario = await this.diarioFindByIdStrict(contextoDeAcesso, dto);

    // =========================================================

    if (diario) {
      await this.diarioRepository
        .createQueryBuilder(aliasDiario)
        .update()
        .set({
          dateDeleted: 'NOW()',
        })
        .where('id = :diarioId', { diarioId: diario.id })
        .andWhere('dateDeleted IS NULL')
        .execute();
    }

    // =========================================================

    return true;
  }
}
