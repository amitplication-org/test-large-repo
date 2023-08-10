import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MseLetterRecService } from "./mseLetterRec.service";
import { MseLetterRecControllerBase } from "./base/mseLetterRec.controller.base";

@swagger.ApiTags("mseLetterRecs")
@common.Controller("mseLetterRecs")
export class MseLetterRecController extends MseLetterRecControllerBase {
  constructor(
    protected readonly service: MseLetterRecService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
