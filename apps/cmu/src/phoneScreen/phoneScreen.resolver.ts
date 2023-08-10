import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PhoneScreenResolverBase } from "./base/phoneScreen.resolver.base";
import { PhoneScreen } from "./base/PhoneScreen";
import { PhoneScreenService } from "./phoneScreen.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PhoneScreen)
export class PhoneScreenResolver extends PhoneScreenResolverBase {
  constructor(
    protected readonly service: PhoneScreenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
