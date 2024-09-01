import { DisponibilidadeProfessorDiaEntity } from '../../entities';
import { createRepositoryFactory, IRepositoryFactoryOutput } from '../helpers/create-repository-factory';

export const createDisponibilidadeProfessorDiaRepository = createRepositoryFactory((ds) => ds.getRepository(DisponibilidadeProfessorDiaEntity).extend({}));

export type DisponibilidadeProfessorDiaRepository = IRepositoryFactoryOutput<typeof createDisponibilidadeProfessorDiaRepository>;
