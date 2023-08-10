import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciPrereqsDesignPortfolioResolverBase } from "./base/mhciPrereqsDesignPortfolio.resolver.base";
import { MhciPrereqsDesignPortfolio } from "./base/MhciPrereqsDesignPortfolio";
import { MhciPrereqsDesignPortfolioService } from "./mhciPrereqsDesignPortfolio.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciPrereqsDesignPortfolio)
export class MhciPrereqsDesignPortfolioResolver extends MhciPrereqsDesignPortfolioResolverBase {
  constructor(
    protected readonly service: MhciPrereqsDesignPortfolioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
