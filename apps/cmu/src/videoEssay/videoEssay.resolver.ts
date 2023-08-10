import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VideoEssayResolverBase } from "./base/videoEssay.resolver.base";
import { VideoEssay } from "./base/VideoEssay";
import { VideoEssayService } from "./videoEssay.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VideoEssay)
export class VideoEssayResolver extends VideoEssayResolverBase {
  constructor(
    protected readonly service: VideoEssayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
