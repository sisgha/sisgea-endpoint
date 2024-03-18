import { ImagemArquivoEntity } from '../../entities/base/imagem_arquivo.entity';
import { createRepositoryFactory, IRepositoryFactoryOutput } from '../helpers/create-repository-factory';

export const createImagemArquivoRepository = createRepositoryFactory((ds) => ds.getRepository(ImagemArquivoEntity).extend({}));

export type ImagemArquivoRepository = IRepositoryFactoryOutput<typeof createImagemArquivoRepository>;
