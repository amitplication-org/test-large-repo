import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScsUserResolverBase } from "./base/scsUser.resolver.base";
import { ScsUser } from "./base/ScsUser";
import { ScsUserService } from "./scsUser.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScsUser)
export class ScsUserResolver extends ScsUserResolverBase {
  constructor(
    protected readonly service: ScsUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
