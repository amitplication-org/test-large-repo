import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RissFundingResolverBase } from "./base/rissFunding.resolver.base";
import { RissFunding } from "./base/RissFunding";
import { RissFundingService } from "./rissFunding.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RissFunding)
export class RissFundingResolver extends RissFundingResolverBase {
  constructor(
    protected readonly service: RissFundingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
