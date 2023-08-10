import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RegistrationFeeStatusResolverBase } from "./base/registrationFeeStatus.resolver.base";
import { RegistrationFeeStatus } from "./base/RegistrationFeeStatus";
import { RegistrationFeeStatusService } from "./registrationFeeStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RegistrationFeeStatus)
export class RegistrationFeeStatusResolver extends RegistrationFeeStatusResolverBase {
  constructor(
    protected readonly service: RegistrationFeeStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
