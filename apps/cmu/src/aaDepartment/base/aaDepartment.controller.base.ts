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
import { AaDepartmentService } from "../aaDepartment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AaDepartmentCreateInput } from "./AaDepartmentCreateInput";
import { AaDepartmentWhereInput } from "./AaDepartmentWhereInput";
import { AaDepartmentWhereUniqueInput } from "./AaDepartmentWhereUniqueInput";
import { AaDepartmentFindManyArgs } from "./AaDepartmentFindManyArgs";
import { AaDepartmentUpdateInput } from "./AaDepartmentUpdateInput";
import { AaDepartment } from "./AaDepartment";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AaDepartmentControllerBase {
  constructor(
    protected readonly service: AaDepartmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AaDepartment })
  @nestAccessControl.UseRoles({
    resource: "AaDepartment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: AaDepartmentCreateInput
  ): Promise<AaDepartment> {
    return await this.service.create({
      data: data,
      select: {
        departmentId: true,
        id: true,
        periodId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AaDepartment] })
  @ApiNestedQuery(AaDepartmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AaDepartment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<AaDepartment[]> {
    const args = plainToClass(AaDepartmentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        departmentId: true,
        id: true,
        periodId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AaDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AaDepartment",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: AaDepartmentWhereUniqueInput
  ): Promise<AaDepartment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        departmentId: true,
        id: true,
        periodId: true,
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
  @swagger.ApiOkResponse({ type: AaDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AaDepartment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: AaDepartmentWhereUniqueInput,
    @common.Body() data: AaDepartmentUpdateInput
  ): Promise<AaDepartment | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          departmentId: true,
          id: true,
          periodId: true,
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
  @swagger.ApiOkResponse({ type: AaDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AaDepartment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: AaDepartmentWhereUniqueInput
  ): Promise<AaDepartment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          departmentId: true,
          id: true,
          periodId: true,
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
