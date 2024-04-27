import * as Spec from '@sisgea/spec';
import { createEntityDtoClass } from 'infrastructure/utils/createDtoClass';
import * as yup from 'yup';
import { ValidationContractObjectUuidBase, createDtoOperationOptions, createValidationContract } from '../../../../../infrastructure';
import { AmbienteFindOneResultDto } from './ambiente-find-one.operation';
import { AmbienteInputDtoValidationContract } from './ambiente-input.operation';
import { AmbienteDto } from './ambiente.dto';

// ======================================================
export const AmbienteCreateDto = createEntityDtoClass(Spec.AmbienteInputDeclaration, 'input');
// ======================================================

export const AmbienteCreateInputDtoValidationContract = createValidationContract(() => {
  const schema = AmbienteInputDtoValidationContract();

  return yup
    .object()
    .concat(schema.pick(['nome', 'descricao', 'codigo', 'capacidade', 'tipo']))
    .shape({
      bloco: ValidationContractObjectUuidBase({ required: true, optional: false }),
    });
});

// ======================================================

export const AMBIENTE_CREATE = createDtoOperationOptions({
  description: 'Realiza o cadastro de um ambiente.',

  gql: {
    name: 'ambienteCreate',

    inputDtoType: () => AmbienteCreateDto,
    inputDtoValidationContract: AmbienteCreateInputDtoValidationContract,

    returnType: () => AmbienteDto,
  },

  swagger: {
    inputBodyType: AmbienteCreateDto,
    inputBodyValidationContract: AmbienteCreateInputDtoValidationContract,

    returnType: AmbienteFindOneResultDto,
  },
});

// ======================================================
