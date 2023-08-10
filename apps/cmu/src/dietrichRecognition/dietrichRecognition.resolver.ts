import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DietrichRecognitionResolverBase } from "./base/dietrichRecognition.resolver.base";
import { DietrichRecognition } from "./base/DietrichRecognition";
import { DietrichRecognitionService } from "./dietrichRecognition.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DietrichRecognition)
export class DietrichRecognitionResolver extends DietrichRecognitionResolverBase {
  constructor(
    protected readonly service: DietrichRecognitionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
