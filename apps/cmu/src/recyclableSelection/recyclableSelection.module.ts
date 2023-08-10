import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecyclableSelectionModuleBase } from "./base/recyclableSelection.module.base";
import { RecyclableSelectionService } from "./recyclableSelection.service";
import { RecyclableSelectionController } from "./recyclableSelection.controller";
import { RecyclableSelectionResolver } from "./recyclableSelection.resolver";

@Module({
  imports: [RecyclableSelectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecyclableSelectionController],
  providers: [RecyclableSelectionService, RecyclableSelectionResolver],
  exports: [RecyclableSelectionService],
})
export class RecyclableSelectionModule {}
