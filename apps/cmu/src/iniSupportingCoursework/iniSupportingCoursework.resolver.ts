import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IniSupportingCourseworkResolverBase } from "./base/iniSupportingCoursework.resolver.base";
import { IniSupportingCoursework } from "./base/IniSupportingCoursework";
import { IniSupportingCourseworkService } from "./iniSupportingCoursework.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IniSupportingCoursework)
export class IniSupportingCourseworkResolver extends IniSupportingCourseworkResolverBase {
  constructor(
    protected readonly service: IniSupportingCourseworkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
