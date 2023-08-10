import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ToeflItpPlusResolverBase } from "./base/toeflItpPlus.resolver.base";
import { ToeflItpPlus } from "./base/ToeflItpPlus";
import { ToeflItpPlusService } from "./toeflItpPlus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ToeflItpPlus)
export class ToeflItpPlusResolver extends ToeflItpPlusResolverBase {
  constructor(
    protected readonly service: ToeflItpPlusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
