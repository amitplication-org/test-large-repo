import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateLangCodeResolverBase } from "./base/slateLangCode.resolver.base";
import { SlateLangCode } from "./base/SlateLangCode";
import { SlateLangCodeService } from "./slateLangCode.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateLangCode)
export class SlateLangCodeResolver extends SlateLangCodeResolverBase {
  constructor(
    protected readonly service: SlateLangCodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
