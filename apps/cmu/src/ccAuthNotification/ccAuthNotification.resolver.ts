import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CcAuthNotificationResolverBase } from "./base/ccAuthNotification.resolver.base";
import { CcAuthNotification } from "./base/CcAuthNotification";
import { CcAuthNotificationService } from "./ccAuthNotification.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CcAuthNotification)
export class CcAuthNotificationResolver extends CcAuthNotificationResolverBase {
  constructor(
    protected readonly service: CcAuthNotificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
