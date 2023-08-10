import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IniYearsExperienceService } from "./iniYearsExperience.service";
import { IniYearsExperienceControllerBase } from "./base/iniYearsExperience.controller.base";

@swagger.ApiTags("iniYearsExperiences")
@common.Controller("iniYearsExperiences")
export class IniYearsExperienceController extends IniYearsExperienceControllerBase {
  constructor(
    protected readonly service: IniYearsExperienceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
