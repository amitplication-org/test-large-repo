import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlacklistReviewerService } from "./blacklistReviewer.service";
import { BlacklistReviewerControllerBase } from "./base/blacklistReviewer.controller.base";

@swagger.ApiTags("blacklistReviewers")
@common.Controller("blacklistReviewers")
export class BlacklistReviewerController extends BlacklistReviewerControllerBase {
  constructor(
    protected readonly service: BlacklistReviewerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
