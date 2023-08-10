import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DuolingoDataCopyResolverBase } from "./base/duolingoDataCopy.resolver.base";
import { DuolingoDataCopy } from "./base/DuolingoDataCopy";
import { DuolingoDataCopyService } from "./duolingoDataCopy.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DuolingoDataCopy)
export class DuolingoDataCopyResolver extends DuolingoDataCopyResolverBase {
  constructor(
    protected readonly service: DuolingoDataCopyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
