import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReviewIniAlternativeProgramService } from "./reviewIniAlternativeProgram.service";
import { ReviewIniAlternativeProgramControllerBase } from "./base/reviewIniAlternativeProgram.controller.base";

@swagger.ApiTags("reviewIniAlternativePrograms")
@common.Controller("reviewIniAlternativePrograms")
export class ReviewIniAlternativeProgramController extends ReviewIniAlternativeProgramControllerBase {
  constructor(
    protected readonly service: ReviewIniAlternativeProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
