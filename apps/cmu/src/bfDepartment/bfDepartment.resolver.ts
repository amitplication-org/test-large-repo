import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BfDepartmentResolverBase } from "./base/bfDepartment.resolver.base";
import { BfDepartment } from "./base/BfDepartment";
import { BfDepartmentService } from "./bfDepartment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BfDepartment)
export class BfDepartmentResolver extends BfDepartmentResolverBase {
  constructor(
    protected readonly service: BfDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
