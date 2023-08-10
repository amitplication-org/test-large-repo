import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SearchTextService } from "./searchText.service";
import { SearchTextControllerBase } from "./base/searchText.controller.base";

@swagger.ApiTags("searchTexts")
@common.Controller("searchTexts")
export class SearchTextController extends SearchTextControllerBase {
  constructor(
    protected readonly service: SearchTextService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
