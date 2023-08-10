import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ToeflItpPlusService } from "./toeflItpPlus.service";
import { ToeflItpPlusControllerBase } from "./base/toeflItpPlus.controller.base";

@swagger.ApiTags("toeflItpPluses")
@common.Controller("toeflItpPluses")
export class ToeflItpPlusController extends ToeflItpPlusControllerBase {
  constructor(
    protected readonly service: ToeflItpPlusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
