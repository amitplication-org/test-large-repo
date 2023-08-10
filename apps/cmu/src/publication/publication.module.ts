import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PublicationModuleBase } from "./base/publication.module.base";
import { PublicationService } from "./publication.service";
import { PublicationController } from "./publication.controller";
import { PublicationResolver } from "./publication.resolver";

@Module({
  imports: [PublicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [PublicationController],
  providers: [PublicationService, PublicationResolver],
  exports: [PublicationService],
})
export class PublicationModule {}
