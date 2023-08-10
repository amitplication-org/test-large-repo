import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FieldsofstudyModuleBase } from "./base/fieldsofstudy.module.base";
import { FieldsofstudyService } from "./fieldsofstudy.service";
import { FieldsofstudyController } from "./fieldsofstudy.controller";
import { FieldsofstudyResolver } from "./fieldsofstudy.resolver";

@Module({
  imports: [FieldsofstudyModuleBase, forwardRef(() => AuthModule)],
  controllers: [FieldsofstudyController],
  providers: [FieldsofstudyService, FieldsofstudyResolver],
  exports: [FieldsofstudyService],
})
export class FieldsofstudyModule {}
