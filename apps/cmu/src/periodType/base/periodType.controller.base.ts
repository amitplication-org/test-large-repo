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
import { PeriodTypeService } from "../periodType.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PeriodTypeCreateInput } from "./PeriodTypeCreateInput";
import { PeriodTypeWhereInput } from "./PeriodTypeWhereInput";
import { PeriodTypeWhereUniqueInput } from "./PeriodTypeWhereUniqueInput";
import { PeriodTypeFindManyArgs } from "./PeriodTypeFindManyArgs";
import { PeriodTypeUpdateInput } from "./PeriodTypeUpdateInput";
import { PeriodType } from "./PeriodType";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PeriodTypeControllerBase {
  constructor(
    protected readonly service: PeriodTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PeriodType })
  @nestAccessControl.UseRoles({
    resource: "PeriodType",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: PeriodTypeCreateInput
  ): Promise<PeriodType> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        periodType: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PeriodType] })
  @ApiNestedQuery(PeriodTypeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PeriodType",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<PeriodType[]> {
    const args = plainToClass(PeriodTypeFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        periodType: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PeriodType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PeriodType",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PeriodTypeWhereUniqueInput
  ): Promise<PeriodType | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        periodType: true,
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
  @swagger.ApiOkResponse({ type: PeriodType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PeriodType",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PeriodTypeWhereUniqueInput,
    @common.Body() data: PeriodTypeUpdateInput
  ): Promise<PeriodType | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          periodType: true,
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
  @swagger.ApiOkResponse({ type: PeriodType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PeriodType",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PeriodTypeWhereUniqueInput
  ): Promise<PeriodType | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          periodType: true,
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
