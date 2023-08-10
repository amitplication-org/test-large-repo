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
import { UnitService } from "../unit.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UnitCreateInput } from "./UnitCreateInput";
import { UnitWhereInput } from "./UnitWhereInput";
import { UnitWhereUniqueInput } from "./UnitWhereUniqueInput";
import { UnitFindManyArgs } from "./UnitFindManyArgs";
import { UnitUpdateInput } from "./UnitUpdateInput";
import { Unit } from "./Unit";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UnitControllerBase {
  constructor(
    protected readonly service: UnitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Unit })
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: UnitCreateInput): Promise<Unit> {
    return await this.service.create({
      data: data,
      select: {
        applicationBasePrice: true,
        applicationProgramPrice: true,
        id: true,
        parentUnitId: true,
        unitCcEmail: true,
        unitDescription: true,
        unitName: true,
        unitNameShort: true,
        unitOracleString: true,
        unitSystemEmail: true,
        unitUrl: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Unit] })
  @ApiNestedQuery(UnitFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Unit[]> {
    const args = plainToClass(UnitFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        applicationBasePrice: true,
        applicationProgramPrice: true,
        id: true,
        parentUnitId: true,
        unitCcEmail: true,
        unitDescription: true,
        unitName: true,
        unitNameShort: true,
        unitOracleString: true,
        unitSystemEmail: true,
        unitUrl: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Unit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<Unit | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        applicationBasePrice: true,
        applicationProgramPrice: true,
        id: true,
        parentUnitId: true,
        unitCcEmail: true,
        unitDescription: true,
        unitName: true,
        unitNameShort: true,
        unitOracleString: true,
        unitSystemEmail: true,
        unitUrl: true,
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
  @swagger.ApiOkResponse({ type: Unit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() data: UnitUpdateInput
  ): Promise<Unit | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          applicationBasePrice: true,
          applicationProgramPrice: true,
          id: true,
          parentUnitId: true,
          unitCcEmail: true,
          unitDescription: true,
          unitName: true,
          unitNameShort: true,
          unitOracleString: true,
          unitSystemEmail: true,
          unitUrl: true,
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
  @swagger.ApiOkResponse({ type: Unit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<Unit | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          applicationBasePrice: true,
          applicationProgramPrice: true,
          id: true,
          parentUnitId: true,
          unitCcEmail: true,
          unitDescription: true,
          unitName: true,
          unitNameShort: true,
          unitOracleString: true,
          unitSystemEmail: true,
          unitUrl: true,
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
