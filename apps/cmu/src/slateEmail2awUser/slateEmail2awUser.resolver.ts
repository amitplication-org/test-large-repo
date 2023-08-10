import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateEmail2awUserResolverBase } from "./base/slateEmail2awUser.resolver.base";
import { SlateEmail2awUser } from "./base/SlateEmail2awUser";
import { SlateEmail2awUserService } from "./slateEmail2awUser.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateEmail2awUser)
export class SlateEmail2awUserResolver extends SlateEmail2awUserResolverBase {
  constructor(
    protected readonly service: SlateEmail2awUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
