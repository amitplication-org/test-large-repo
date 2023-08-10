import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TestusersInfoResolverBase } from "./base/testusersInfo.resolver.base";
import { TestusersInfo } from "./base/TestusersInfo";
import { TestusersInfoService } from "./testusersInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TestusersInfo)
export class TestusersInfoResolver extends TestusersInfoResolverBase {
  constructor(
    protected readonly service: TestusersInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
