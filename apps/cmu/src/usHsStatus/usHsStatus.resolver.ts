import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UsHSStatusResolverBase } from "./base/usHsStatus.resolver.base";
import { UsHSStatus } from "./base/UsHSStatus";
import { UsHSStatusService } from "./usHsStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UsHSStatus)
export class UsHSStatusResolver extends UsHSStatusResolverBase {
  constructor(
    protected readonly service: UsHSStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
