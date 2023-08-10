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
import { MhciPrereqService } from "../mhciPrereq.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MhciPrereqCreateInput } from "./MhciPrereqCreateInput";
import { MhciPrereqWhereInput } from "./MhciPrereqWhereInput";
import { MhciPrereqWhereUniqueInput } from "./MhciPrereqWhereUniqueInput";
import { MhciPrereqFindManyArgs } from "./MhciPrereqFindManyArgs";
import { MhciPrereqUpdateInput } from "./MhciPrereqUpdateInput";
import { MhciPrereq } from "./MhciPrereq";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MhciPrereqControllerBase {
  constructor(
    protected readonly service: MhciPrereqService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MhciPrereq })
  @nestAccessControl.UseRoles({
    resource: "MhciPrereq",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: MhciPrereqCreateInput
  ): Promise<MhciPrereq> {
    return await this.service.create({
      data: data,
      select: {
        applicationId: true,
        id: true,
        periodId: true,
        prereq_type: true,
        status: true,
        student_assessment: true,
        studentLuUsersUsertypesId: true,
        timestamp: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MhciPrereq] })
  @ApiNestedQuery(MhciPrereqFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MhciPrereq",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<MhciPrereq[]> {
    const args = plainToClass(MhciPrereqFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        applicationId: true,
        id: true,
        periodId: true,
        prereq_type: true,
        status: true,
        student_assessment: true,
        studentLuUsersUsertypesId: true,
        timestamp: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MhciPrereq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MhciPrereq",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MhciPrereqWhereUniqueInput
  ): Promise<MhciPrereq | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        applicationId: true,
        id: true,
        periodId: true,
        prereq_type: true,
        status: true,
        student_assessment: true,
        studentLuUsersUsertypesId: true,
        timestamp: true,
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
  @swagger.ApiOkResponse({ type: MhciPrereq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MhciPrereq",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MhciPrereqWhereUniqueInput,
    @common.Body() data: MhciPrereqUpdateInput
  ): Promise<MhciPrereq | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          applicationId: true,
          id: true,
          periodId: true,
          prereq_type: true,
          status: true,
          student_assessment: true,
          studentLuUsersUsertypesId: true,
          timestamp: true,
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
  @swagger.ApiOkResponse({ type: MhciPrereq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MhciPrereq",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MhciPrereqWhereUniqueInput
  ): Promise<MhciPrereq | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          applicationId: true,
          id: true,
          periodId: true,
          prereq_type: true,
          status: true,
          student_assessment: true,
          studentLuUsersUsertypesId: true,
          timestamp: true,
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
