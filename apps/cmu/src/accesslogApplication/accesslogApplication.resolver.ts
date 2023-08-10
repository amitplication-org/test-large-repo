import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccesslogApplicationResolverBase } from "./base/accesslogApplication.resolver.base";
import { AccesslogApplication } from "./base/AccesslogApplication";
import { AccesslogApplicationService } from "./accesslogApplication.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccesslogApplication)
export class AccesslogApplicationResolver extends AccesslogApplicationResolverBase {
  constructor(
    protected readonly service: AccesslogApplicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
