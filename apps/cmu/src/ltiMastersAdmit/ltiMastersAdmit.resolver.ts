import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LtiMastersAdmitResolverBase } from "./base/ltiMastersAdmit.resolver.base";
import { LtiMastersAdmit } from "./base/LtiMastersAdmit";
import { LtiMastersAdmitService } from "./ltiMastersAdmit.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LtiMastersAdmit)
export class LtiMastersAdmitResolver extends LtiMastersAdmitResolverBase {
  constructor(
    protected readonly service: LtiMastersAdmitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
