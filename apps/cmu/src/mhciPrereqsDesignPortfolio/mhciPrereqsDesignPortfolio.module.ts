import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciPrereqsDesignPortfolioModuleBase } from "./base/mhciPrereqsDesignPortfolio.module.base";
import { MhciPrereqsDesignPortfolioService } from "./mhciPrereqsDesignPortfolio.service";
import { MhciPrereqsDesignPortfolioController } from "./mhciPrereqsDesignPortfolio.controller";
import { MhciPrereqsDesignPortfolioResolver } from "./mhciPrereqsDesignPortfolio.resolver";

@Module({
  imports: [MhciPrereqsDesignPortfolioModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciPrereqsDesignPortfolioController],
  providers: [
    MhciPrereqsDesignPortfolioService,
    MhciPrereqsDesignPortfolioResolver,
  ],
  exports: [MhciPrereqsDesignPortfolioService],
})
export class MhciPrereqsDesignPortfolioModule {}
