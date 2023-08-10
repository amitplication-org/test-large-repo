import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MitsSlateEmployService } from "./mitsSlateEmploy.service";
import { MitsSlateEmployControllerBase } from "./base/mitsSlateEmploy.controller.base";

@swagger.ApiTags("mitsSlateEmploys")
@common.Controller("mitsSlateEmploys")
export class MitsSlateEmployController extends MitsSlateEmployControllerBase {
  constructor(
    protected readonly service: MitsSlateEmployService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
