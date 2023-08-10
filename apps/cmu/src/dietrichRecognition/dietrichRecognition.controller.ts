import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DietrichRecognitionService } from "./dietrichRecognition.service";
import { DietrichRecognitionControllerBase } from "./base/dietrichRecognition.controller.base";

@swagger.ApiTags("dietrichRecognitions")
@common.Controller("dietrichRecognitions")
export class DietrichRecognitionController extends DietrichRecognitionControllerBase {
  constructor(
    protected readonly service: DietrichRecognitionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
