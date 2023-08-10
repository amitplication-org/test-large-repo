import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciPrereqsConversationCommentResolverBase } from "./base/mhciPrereqsConversationComment.resolver.base";
import { MhciPrereqsConversationComment } from "./base/MhciPrereqsConversationComment";
import { MhciPrereqsConversationCommentService } from "./mhciPrereqsConversationComment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciPrereqsConversationComment)
export class MhciPrereqsConversationCommentResolver extends MhciPrereqsConversationCommentResolverBase {
  constructor(
    protected readonly service: MhciPrereqsConversationCommentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
