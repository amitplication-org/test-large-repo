import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciSlateGreResolverBase } from "./base/mhciSlateGre.resolver.base";
import { MhciSlateGre } from "./base/MhciSlateGre";
import { MhciSlateGreService } from "./mhciSlateGre.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciSlateGre)
export class MhciSlateGreResolver extends MhciSlateGreResolverBase {
  constructor(
    protected readonly service: MhciSlateGreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
