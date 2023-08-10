import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ToeflEssentialService } from "./toeflEssential.service";
import { ToeflEssentialControllerBase } from "./base/toeflEssential.controller.base";

@swagger.ApiTags("toeflEssentials")
@common.Controller("toeflEssentials")
export class ToeflEssentialController extends ToeflEssentialControllerBase {
  constructor(
    protected readonly service: ToeflEssentialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
