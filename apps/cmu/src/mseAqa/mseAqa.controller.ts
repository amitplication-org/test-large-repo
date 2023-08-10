import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MseAqaService } from "./mseAqa.service";
import { MseAqaControllerBase } from "./base/mseAqa.controller.base";

@swagger.ApiTags("mseAqas")
@common.Controller("mseAqas")
export class MseAqaController extends MseAqaControllerBase {
  constructor(
    protected readonly service: MseAqaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
