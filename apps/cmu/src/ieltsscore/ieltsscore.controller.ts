import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IeltsscoreService } from "./ieltsscore.service";
import { IeltsscoreControllerBase } from "./base/ieltsscore.controller.base";

@swagger.ApiTags("ieltsscores")
@common.Controller("ieltsscores")
export class IeltsscoreController extends IeltsscoreControllerBase {
  constructor(
    protected readonly service: IeltsscoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
