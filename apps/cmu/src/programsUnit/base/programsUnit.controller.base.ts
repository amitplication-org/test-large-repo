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
import { ProgramsUnitService } from "../programsUnit.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProgramsUnitCreateInput } from "./ProgramsUnitCreateInput";
import { ProgramsUnitWhereInput } from "./ProgramsUnitWhereInput";
import { ProgramsUnitWhereUniqueInput } from "./ProgramsUnitWhereUniqueInput";
import { ProgramsUnitFindManyArgs } from "./ProgramsUnitFindManyArgs";
import { ProgramsUnitUpdateInput } from "./ProgramsUnitUpdateInput";
import { ProgramsUnit } from "./ProgramsUnit";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProgramsUnitControllerBase {
  constructor(
    protected readonly service: ProgramsUnitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProgramsUnit })
  @nestAccessControl.UseRoles({
    resource: "ProgramsUnit",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: ProgramsUnitCreateInput
  ): Promise<ProgramsUnit> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        programsId: true,
        unitId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ProgramsUnit] })
  @ApiNestedQuery(ProgramsUnitFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProgramsUnit",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<ProgramsUnit[]> {
    const args = plainToClass(ProgramsUnitFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        programsId: true,
        unitId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProgramsUnit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProgramsUnit",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ProgramsUnitWhereUniqueInput
  ): Promise<ProgramsUnit | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        programsId: true,
        unitId: true,
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
  @swagger.ApiOkResponse({ type: ProgramsUnit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProgramsUnit",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ProgramsUnitWhereUniqueInput,
    @common.Body() data: ProgramsUnitUpdateInput
  ): Promise<ProgramsUnit | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          programsId: true,
          unitId: true,
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
  @swagger.ApiOkResponse({ type: ProgramsUnit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProgramsUnit",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ProgramsUnitWhereUniqueInput
  ): Promise<ProgramsUnit | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          programsId: true,
          unitId: true,
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
