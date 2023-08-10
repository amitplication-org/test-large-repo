import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RejectionWaiverResolverBase } from "./base/rejectionWaiver.resolver.base";
import { RejectionWaiver } from "./base/RejectionWaiver";
import { RejectionWaiverService } from "./rejectionWaiver.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RejectionWaiver)
export class RejectionWaiverResolver extends RejectionWaiverResolverBase {
  constructor(
    protected readonly service: RejectionWaiverService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
