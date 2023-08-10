import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AaDepartmentResolverBase } from "./base/aaDepartment.resolver.base";
import { AaDepartment } from "./base/AaDepartment";
import { AaDepartmentService } from "./aaDepartment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AaDepartment)
export class AaDepartmentResolver extends AaDepartmentResolverBase {
  constructor(
    protected readonly service: AaDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
