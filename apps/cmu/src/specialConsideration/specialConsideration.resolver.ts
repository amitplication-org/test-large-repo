import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SpecialConsiderationResolverBase } from "./base/specialConsideration.resolver.base";
import { SpecialConsideration } from "./base/SpecialConsideration";
import { SpecialConsiderationService } from "./specialConsideration.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SpecialConsideration)
export class SpecialConsiderationResolver extends SpecialConsiderationResolverBase {
  constructor(
    protected readonly service: SpecialConsiderationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
