import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DietrichSharingService } from "./dietrichSharing.service";
import { DietrichSharingControllerBase } from "./base/dietrichSharing.controller.base";

@swagger.ApiTags("dietrichSharings")
@common.Controller("dietrichSharings")
export class DietrichSharingController extends DietrichSharingControllerBase {
  constructor(
    protected readonly service: DietrichSharingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
