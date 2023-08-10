import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FieldsofstudyResolverBase } from "./base/fieldsofstudy.resolver.base";
import { Fieldsofstudy } from "./base/Fieldsofstudy";
import { FieldsofstudyService } from "./fieldsofstudy.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Fieldsofstudy)
export class FieldsofstudyResolver extends FieldsofstudyResolverBase {
  constructor(
    protected readonly service: FieldsofstudyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
