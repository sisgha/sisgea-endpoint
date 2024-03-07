import { ICampusFindOneResultDto } from '../../../../ambientes';
import { IModalidadeModel } from '../../IModalidadeModel';

export interface IModalidadeFindOneResultDto extends Pick<IModalidadeModel, 'id' | 'nome' | 'slug'> {
  campus: ICampusFindOneResultDto;
}
