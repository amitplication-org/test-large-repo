/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { LangProfRecommenderInfoService } from "../langProfRecommenderInfo.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LangProfRecommenderInfoCreateInput } from "./LangProfRecommenderInfoCreateInput";
import { LangProfRecommenderInfoWhereInput } from "./LangProfRecommenderInfoWhereInput";
import { LangProfRecommenderInfoWhereUniqueInput } from "./LangProfRecommenderInfoWhereUniqueInput";
import { LangProfRecommenderInfoFindManyArgs } from "./LangProfRecommenderInfoFindManyArgs";
import { LangProfRecommenderInfoUpdateInput } from "./LangProfRecommenderInfoUpdateInput";
import { LangProfRecommenderInfo } from "./LangProfRecommenderInfo";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LangProfRecommenderInfoControllerBase {
  constructor(
    protected readonly service: LangProfRecommenderInfoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LangProfRecommenderInfo })
  @nestAccessControl.UseRoles({
    resource: "LangProfRecommenderInfo",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: LangProfRecommenderInfoCreateInput
  ): Promise<LangProfRecommenderInfo> {
    return await this.service.create({
      data: data,
      select: {
        affiliation: true,
        id: true,
        languageSpecialization: true,
        phone: true,
        recUserId: true,
        title: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [LangProfRecommenderInfo] })
  @ApiNestedQuery(LangProfRecommenderInfoFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LangProfRecommenderInfo",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(
    @common.Req() request: Request
  ): Promise<LangProfRecommenderInfo[]> {
    const args = plainToClass(
      LangProfRecommenderInfoFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
      select: {
        affiliation: true,
        id: true,
        languageSpecialization: true,
        phone: true,
        recUserId: true,
        title: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LangProfRecommenderInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LangProfRecommenderInfo",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: LangProfRecommenderInfoWhereUniqueInput
  ): Promise<LangProfRecommenderInfo | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        affiliation: true,
        id: true,
        languageSpecialization: true,
        phone: true,
        recUserId: true,
        title: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: LangProfRecommenderInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LangProfRecommenderInfo",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: LangProfRecommenderInfoWhereUniqueInput,
    @common.Body() data: LangProfRecommenderInfoUpdateInput
  ): Promise<LangProfRecommenderInfo | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          affiliation: true,
          id: true,
          languageSpecialization: true,
          phone: true,
          recUserId: true,
          title: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: LangProfRecommenderInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LangProfRecommenderInfo",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: LangProfRecommenderInfoWhereUniqueInput
  ): Promise<LangProfRecommenderInfo | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          affiliation: true,
          id: true,
          languageSpecialization: true,
          phone: true,
          recUserId: true,
          title: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
