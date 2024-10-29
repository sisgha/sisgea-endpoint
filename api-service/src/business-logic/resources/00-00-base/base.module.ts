import { IntervaloDeTempoModule } from "@/business-logic/resources/00-00-base/intervalo-de-tempo/intervalo-de-tempo.module";
import { Module } from "@nestjs/common";
import { ArquivoModule } from "./arquivo/arquivo.module";
import { ImagemArquivoModule } from "./imagem-arquivo/imagem-arquivo.module";
import { ImagemModule } from "./imagem/imagem.module";

@Module({
  imports: [ImagemModule, ArquivoModule, ImagemArquivoModule, IntervaloDeTempoModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class BaseModule {}
