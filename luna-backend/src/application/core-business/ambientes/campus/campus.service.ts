import {
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { SelectQueryBuilder } from 'typeorm';
import { ICampusFindOneByIdInputDto } from '../../(dtos)';
import {
  ICampusFindOneResultDto,
  ICampusInputDto,
  IRequestContext,
} from '../../../../domain';
import { DatabaseContext } from '../../../../infrastructure/integrate-database/typeorm/database-context/database-context';
import { EnderecoService } from '../endereco/endereco.service';

@Injectable()
export class CampusService {
  constructor(private databaseContext: DatabaseContext) {}

  get campusRepository() {
    return this.databaseContext.campusRepository;
  }

  //

  static campusSelectFindOne(
    qb: SelectQueryBuilder<any>,
    loadEndereco = true,
    loadCidade = true,
    loadEstado = true,
  ) {
    qb.addSelect([
      'campus.id',
      'campus.nomeFantasia',
      'campus.razaoSocial',
      'campus.nomeFantasia',
      'campus.apelido',
      'campus.cnpj',
    ]);

    if (loadEndereco) {
      qb.innerJoin('campus.endereco', 'endereco');
      EnderecoService.enderecoSelectFindOne(qb, loadCidade, loadEstado);
    }
  }

  //

  async campusFindAll(
    requestContext: IRequestContext,
  ): Promise<ICampusFindOneResultDto[]> {
    // =========================================================

    const qb = this.campusRepository.createQueryBuilder('campus');

    // =========================================================

    requestContext.authz.applyFindFilter(qb, 'campus');

    // =========================================================

    qb.select([]);
    CampusService.campusSelectFindOne(qb, true, true, true);
    const campi = await qb.getMany();

    // =========================================================

    return campi;
  }

  async campusFindById(
    requestContext: IRequestContext,
    dto: ICampusFindOneByIdInputDto,
  ): Promise<ICampusFindOneResultDto | null> {
    // =========================================================

    const qb = this.campusRepository.createQueryBuilder('campus');

    // =========================================================

    requestContext.authz.applyFindFilter(qb, 'campus');

    // =========================================================

    qb.andWhere('campus.id = :id', { id: dto.id });

    // =========================================================

    qb.select([]);
    CampusService.campusSelectFindOne(qb, true, true, true);
    const campus = await qb.getOne();

    // =========================================================

    return campus;
  }

  async campusFindByIdStrict(
    requestContext: IRequestContext,
    dto: ICampusFindOneByIdInputDto,
  ) {
    const campus = await this.campusFindById(requestContext, dto);

    if (!campus) {
      throw new NotFoundException();
    }

    return campus;
  }

  //

  async campusCreate(requestContext: IRequestContext, dto: ICampusInputDto) {
    console.log(JSON.stringify({ requestContext, dto }, null, 2));
    throw new NotImplementedException();
  }
}
