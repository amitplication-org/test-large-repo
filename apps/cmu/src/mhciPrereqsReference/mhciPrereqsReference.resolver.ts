import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciPrereqsReferenceResolverBase } from "./base/mhciPrereqsReference.resolver.base";
import { MhciPrereqsReference } from "./base/MhciPrereqsReference";
import { MhciPrereqsReferenceService } from "./mhciPrereqsReference.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciPrereqsReference)
export class MhciPrereqsReferenceResolver extends MhciPrereqsReferenceResolverBase {
  constructor(
    protected readonly service: MhciPrereqsReferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
