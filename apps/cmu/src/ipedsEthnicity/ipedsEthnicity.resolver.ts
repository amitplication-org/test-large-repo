import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IpedsEthnicityResolverBase } from "./base/ipedsEthnicity.resolver.base";
import { IpedsEthnicity } from "./base/IpedsEthnicity";
import { IpedsEthnicityService } from "./ipedsEthnicity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IpedsEthnicity)
export class IpedsEthnicityResolver extends IpedsEthnicityResolverBase {
  constructor(
    protected readonly service: IpedsEthnicityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
