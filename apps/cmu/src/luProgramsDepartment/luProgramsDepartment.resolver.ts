import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuProgramsDepartmentResolverBase } from "./base/luProgramsDepartment.resolver.base";
import { LuProgramsDepartment } from "./base/LuProgramsDepartment";
import { LuProgramsDepartmentService } from "./luProgramsDepartment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuProgramsDepartment)
export class LuProgramsDepartmentResolver extends LuProgramsDepartmentResolverBase {
  constructor(
    protected readonly service: LuProgramsDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
