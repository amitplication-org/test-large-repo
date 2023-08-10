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
import { CohortService } from "../cohort.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CohortCreateInput } from "./CohortCreateInput";
import { CohortWhereInput } from "./CohortWhereInput";
import { CohortWhereUniqueInput } from "./CohortWhereUniqueInput";
import { CohortFindManyArgs } from "./CohortFindManyArgs";
import { CohortUpdateInput } from "./CohortUpdateInput";
import { Cohort } from "./Cohort";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CohortControllerBase {
  constructor(
    protected readonly service: CohortService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Cohort })
  @nestAccessControl.UseRoles({
    resource: "Cohort",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: CohortCreateInput): Promise<Cohort> {
    return await this.service.create({
      data: data,
      select: {
        closed: true,
        id: true,
        periodId: true,
        startDate: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Cohort] })
  @ApiNestedQuery(CohortFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Cohort",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Cohort[]> {
    const args = plainToClass(CohortFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        closed: true,
        id: true,
        periodId: true,
        startDate: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Cohort })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Cohort",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: CohortWhereUniqueInput
  ): Promise<Cohort | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        closed: true,
        id: true,
        periodId: true,
        startDate: true,
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
  @swagger.ApiOkResponse({ type: Cohort })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Cohort",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: CohortWhereUniqueInput,
    @common.Body() data: CohortUpdateInput
  ): Promise<Cohort | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          closed: true,
          id: true,
          periodId: true,
          startDate: true,
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
  @swagger.ApiOkResponse({ type: Cohort })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Cohort",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: CohortWhereUniqueInput
  ): Promise<Cohort | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          closed: true,
          id: true,
          periodId: true,
          startDate: true,
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
