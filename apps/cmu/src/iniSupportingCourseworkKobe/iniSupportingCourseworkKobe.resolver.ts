import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IniSupportingCourseworkKobeResolverBase } from "./base/iniSupportingCourseworkKobe.resolver.base";
import { IniSupportingCourseworkKobe } from "./base/IniSupportingCourseworkKobe";
import { IniSupportingCourseworkKobeService } from "./iniSupportingCourseworkKobe.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IniSupportingCourseworkKobe)
export class IniSupportingCourseworkKobeResolver extends IniSupportingCourseworkKobeResolverBase {
  constructor(
    protected readonly service: IniSupportingCourseworkKobeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
