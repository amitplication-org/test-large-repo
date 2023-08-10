import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PeriodUmbrellaResolverBase } from "./base/periodUmbrella.resolver.base";
import { PeriodUmbrella } from "./base/PeriodUmbrella";
import { PeriodUmbrellaService } from "./periodUmbrella.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PeriodUmbrella)
export class PeriodUmbrellaResolver extends PeriodUmbrellaResolverBase {
  constructor(
    protected readonly service: PeriodUmbrellaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
