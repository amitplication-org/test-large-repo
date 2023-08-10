import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TesttableforBansheeResolverBase } from "./base/testtableforBanshee.resolver.base";
import { TesttableforBanshee } from "./base/TesttableforBanshee";
import { TesttableforBansheeService } from "./testtableforBanshee.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TesttableforBanshee)
export class TesttableforBansheeResolver extends TesttableforBansheeResolverBase {
  constructor(
    protected readonly service: TesttableforBansheeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
