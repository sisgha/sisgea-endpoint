import { ValidationContractUuid, createDtoOperationGetFileOptions } from '../../../../../infrastructure';

// ======================================================

export const USUARIO_GET_IMAGEM_PERFIL = createDtoOperationGetFileOptions({
  description: 'Obtêm a imagem de perfil do usuário.',

  meta: {
    getFile: {
      mimeType: 'image/jpeg',
    },
  },

  swagger: {
    params: [
      {
        name: 'id',
        description: 'ID do usuário.',
        validationContract: ValidationContractUuid,
      },
    ],
  },
});

// ======================================================