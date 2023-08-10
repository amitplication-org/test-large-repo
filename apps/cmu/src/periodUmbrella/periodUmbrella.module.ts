import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PeriodUmbrellaModuleBase } from "./base/periodUmbrella.module.base";
import { PeriodUmbrellaService } from "./periodUmbrella.service";
import { PeriodUmbrellaController } from "./periodUmbrella.controller";
import { PeriodUmbrellaResolver } from "./periodUmbrella.resolver";

@Module({
  imports: [PeriodUmbrellaModuleBase, forwardRef(() => AuthModule)],
  controllers: [PeriodUmbrellaController],
  providers: [PeriodUmbrellaService, PeriodUmbrellaResolver],
  exports: [PeriodUmbrellaService],
})
export class PeriodUmbrellaModule {}
