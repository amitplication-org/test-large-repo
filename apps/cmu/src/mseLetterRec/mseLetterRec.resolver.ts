import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MseLetterRecResolverBase } from "./base/mseLetterRec.resolver.base";
import { MseLetterRec } from "./base/MseLetterRec";
import { MseLetterRecService } from "./mseLetterRec.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MseLetterRec)
export class MseLetterRecResolver extends MseLetterRecResolverBase {
  constructor(
    protected readonly service: MseLetterRecService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
