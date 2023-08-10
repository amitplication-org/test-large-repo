import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateOrgResolverBase } from "./base/slateOrg.resolver.base";
import { SlateOrg } from "./base/SlateOrg";
import { SlateOrgService } from "./slateOrg.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateOrg)
export class SlateOrgResolver extends SlateOrgResolverBase {
  constructor(
    protected readonly service: SlateOrgService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
