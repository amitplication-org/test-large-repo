import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FellowshipResolverBase } from "./base/fellowship.resolver.base";
import { Fellowship } from "./base/Fellowship";
import { FellowshipService } from "./fellowship.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Fellowship)
export class FellowshipResolver extends FellowshipResolverBase {
  constructor(
    protected readonly service: FellowshipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
