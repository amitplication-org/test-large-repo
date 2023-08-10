import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateAwAppIdResolverBase } from "./base/slateAwAppId.resolver.base";
import { SlateAwAppId } from "./base/SlateAwAppId";
import { SlateAwAppIdService } from "./slateAwAppId.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateAwAppId)
export class SlateAwAppIdResolver extends SlateAwAppIdResolverBase {
  constructor(
    protected readonly service: SlateAwAppIdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
