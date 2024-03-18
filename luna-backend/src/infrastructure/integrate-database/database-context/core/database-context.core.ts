import { DataSource, EntityManager } from 'typeorm';
import * as repositories from '../../typeorm/repositories';

export class DatabaseContextCore {
  constructor(readonly ds: DataSource | EntityManager) {}

  //

  get dataSource() {
    if (this.ds instanceof DataSource) {
      return this.ds;
    }

    return this.ds.connection;
  }

  get entityManager() {
    if (this.ds instanceof EntityManager) {
      return this.ds;
    }

    return this.ds.manager;
  }

  async transaction<T>(callback: (context: { databaseContext: DatabaseContextCore }) => T | Promise<T>): Promise<T> {
    return this.ds.transaction(async (entityManager) => {
      const databaseContextForTransaction = new DatabaseContextCore(entityManager);
      return callback({ databaseContext: databaseContextForTransaction });
    });
  }

  //

  // =====================================================
  // == [ AUTENTICAÇÃO ] ====================================
  // =====================================================

  get usuarioRepository() {
    return repositories.createUsuarioRepository(this.ds);
  }

  get usuarioVinculoCampusRepository() {
    return repositories.createUsuarioVinculoCampusRepository(this.ds).extend({});
  }

  //

  // =====================================================
  // == [ BASE ] =========================================
  // =====================================================

  get arquivoRepository() {
    return repositories.createArquivoRepository(this.ds);
  }

  get imagemRepository() {
    return repositories.createImagemRepository(this.ds);
  }

  get imagemArquivoRepository() {
    return repositories.createImagemArquivoRepository(this.ds);
  }

  // =====================================================
  // == [ AMBIENTES ] ====================================
  // =====================================================

  get estadoRepository() {
    return repositories.createEstadoRepository(this.ds);
  }

  get cidadeRepository() {
    return repositories.createCidadeRepository(this.ds);
  }

  get enderecoRepository() {
    return repositories.createEnderecoRepository(this.ds);
  }

  get campusRepository() {
    return repositories.createCampusRepository(this.ds);
  }

  get blocoRepository() {
    return repositories.createBlocoRepository(this.ds);
  }

  get ambienteRepository() {
    return repositories.createAmbienteRepository(this.ds);
  }

  get reservaRepository() {
    return repositories.createReservaRepository(this.ds);
  }

  // =====================================================
  // == [ Ensino ] =======================================
  // =====================================================

  get modalidadeRepository() {
    return repositories.createModalidadeRepository(this.ds);
  }

  get cursoRepository() {
    return repositories.createCursoRepository(this.ds);
  }

  get disciplinaRepository() {
    return repositories.createDisciplinaRepository(this.ds);
  }

  get turmaRepository() {
    return repositories.createTurmaRepository(this.ds);
  }

  get diarioRepository() {
    return repositories.createDiarioRepository(this.ds);
  }

  // =====================================================
}
