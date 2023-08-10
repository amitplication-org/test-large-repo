import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciSlateAppSchoolResolverBase } from "./base/mhciSlateAppSchool.resolver.base";
import { MhciSlateAppSchool } from "./base/MhciSlateAppSchool";
import { MhciSlateAppSchoolService } from "./mhciSlateAppSchool.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciSlateAppSchool)
export class MhciSlateAppSchoolResolver extends MhciSlateAppSchoolResolverBase {
  constructor(
    protected readonly service: MhciSlateAppSchoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
