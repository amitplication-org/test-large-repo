import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RecommenderInfoService } from "./recommenderInfo.service";
import { RecommenderInfoControllerBase } from "./base/recommenderInfo.controller.base";

@swagger.ApiTags("recommenderInfos")
@common.Controller("recommenderInfos")
export class RecommenderInfoController extends RecommenderInfoControllerBase {
  constructor(
    protected readonly service: RecommenderInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
