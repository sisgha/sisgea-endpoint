import { ObjectType } from '@nestjs/graphql';
import * as Dto from '@sisgea/spec';
import * as yup from 'yup';
import { AmbienteDto, AmbienteFindOneResultDto } from '../../../ambientes/ambiente/dtos';
import { ImagemDto, ImagemFindOneResultDto } from '../../../base/imagem/imagem.dtos';
import { CursoDto, CursoFindOneResultDto } from '../../curso/dtos';
import { CommonPropertyUuid, createDtoPropertyMap, DtoProperty, ObjectUuidDto } from '../../../../legacy';
import { createValidationContract, ValidationContractObjectUuidBase, ValidationContractString, ValidationContractUuid } from '../../../../validacao';

// ======================================================

export const TurmaDtoValidationContract = createValidationContract(() => {
  return yup.object({
    id: ValidationContractUuid(),
    //
    periodo: ValidationContractString().required().nonNullable(),
    grupo: ValidationContractString().required().nonNullable(),
    nome: ValidationContractString().required().nonNullable(),
    //

    ambientePadraoAula: ValidationContractObjectUuidBase({ required: false, optional: false }),
    curso: ValidationContractObjectUuidBase({ required: true, optional: false }),
  });
});

// ======================================================

export const TurmaDtoProperties = createDtoPropertyMap({
  TURMA_ID: CommonPropertyUuid('ID de "turma"'),

  //

  TURMA_PERIODO: {
    nullable: false,
    description: 'Período da turma.',
    //
    gql: {
      type: () => String,
    },
    swagger: {
      type: 'string',
    },
  },
  TURMA_GRUPO: {
    nullable: false,
    description: 'Grupo da turma.',
    //
    gql: {
      type: () => String,
    },
    swagger: {
      type: 'string',
    },
  },
  TURMA_NOME: {
    nullable: false,
    description: 'Nome da turma.',
    //
    gql: {
      type: () => String,
    },
    swagger: {
      type: 'string',
    },
  },

  TURMA_AMBIENTE_PADRAO_AULA_INPUT: {
    nullable: true,
    description: 'Ambiente padrão da sala de aula.',
    //
    gql: {
      type: () => ObjectUuidDto,
    },
    swagger: {
      type: ObjectUuidDto,
    },
  },

  TURMA_AMBIENTE_PADRAO_AULA_OUTPUT: {
    nullable: true,
    description: 'Ambiente padrão da sala de aula.',
    //
    gql: {
      type: () => AmbienteDto,
    },
    swagger: {
      type: AmbienteFindOneResultDto,
    },
  },

  TURMA_CURSO_INPUT: {
    nullable: false,
    description: 'Curso que a turma pertence.',
    //
    gql: {
      type: () => ObjectUuidDto,
    },
    swagger: {
      type: ObjectUuidDto,
    },
  },

  TURMA_CURSO_OUTPUT: {
    nullable: false,
    description: 'Curso que a turma pertence.',
    //
    gql: {
      type: () => CursoDto,
    },
    swagger: {
      type: CursoFindOneResultDto,
    },
  },

  TURMA_IMAGEM_CAPA_OUTPUT: {
    nullable: true,
    description: 'Imagem de capa da turma.',
    //
    gql: {
      type: () => ImagemDto,
    },
    swagger: {
      type: ImagemFindOneResultDto,
    },
  },
  //
});

// ======================================================

@ObjectType('Turma')
export class TurmaDto implements Dto.ITurmaModel {
  @DtoProperty(TurmaDtoProperties.TURMA_ID)
  id!: string;

  //

  @DtoProperty(TurmaDtoProperties.TURMA_PERIODO)
  periodo!: string;

  @DtoProperty(TurmaDtoProperties.TURMA_GRUPO)
  grupo!: string;

  @DtoProperty(TurmaDtoProperties.TURMA_NOME)
  nome!: string;

  @DtoProperty(TurmaDtoProperties.TURMA_AMBIENTE_PADRAO_AULA_OUTPUT)
  ambientePadraoAula!: Dto.IAmbienteModel | null;

  @DtoProperty(TurmaDtoProperties.TURMA_CURSO_OUTPUT)
  curso!: Dto.ICursoModel;

  @DtoProperty(TurmaDtoProperties.TURMA_IMAGEM_CAPA_OUTPUT)
  imagemCapa!: Dto.IImagemModel | null;

  //

  dateCreated!: Dto.IEntityDate;
  dateUpdated!: Dto.IEntityDate;
  dateDeleted!: Dto.IEntityDate | null;
}