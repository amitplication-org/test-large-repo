import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MitsSlateGreService } from "./mitsSlateGre.service";
import { MitsSlateGreControllerBase } from "./base/mitsSlateGre.controller.base";

@swagger.ApiTags("mitsSlateGres")
@common.Controller("mitsSlateGres")
export class MitsSlateGreController extends MitsSlateGreControllerBase {
  constructor(
    protected readonly service: MitsSlateGreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
