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
import { GrescoreService } from "../grescore.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GrescoreCreateInput } from "./GrescoreCreateInput";
import { GrescoreWhereInput } from "./GrescoreWhereInput";
import { GrescoreWhereUniqueInput } from "./GrescoreWhereUniqueInput";
import { GrescoreFindManyArgs } from "./GrescoreFindManyArgs";
import { GrescoreUpdateInput } from "./GrescoreUpdateInput";
import { Grescore } from "./Grescore";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GrescoreControllerBase {
  constructor(
    protected readonly service: GrescoreService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Grescore })
  @nestAccessControl.UseRoles({
    resource: "Grescore",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: GrescoreCreateInput): Promise<Grescore> {
    return await this.service.create({
      data: data,
      select: {
        analyticalpercentile: true,
        analyticalscore: true,
        analyticalwritingpercentile: true,
        analyticalwritingscore: true,
        applicationId: true,
        athome: true,
        datafileId: true,
        id: true,
        quantitativepercentile: true,
        quantitativescore: true,
        scorereceived: true,
        testdate: true,
        verbalpercentile: true,
        verbalscore: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Grescore] })
  @ApiNestedQuery(GrescoreFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Grescore",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Grescore[]> {
    const args = plainToClass(GrescoreFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        analyticalpercentile: true,
        analyticalscore: true,
        analyticalwritingpercentile: true,
        analyticalwritingscore: true,
        applicationId: true,
        athome: true,
        datafileId: true,
        id: true,
        quantitativepercentile: true,
        quantitativescore: true,
        scorereceived: true,
        testdate: true,
        verbalpercentile: true,
        verbalscore: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Grescore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Grescore",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: GrescoreWhereUniqueInput
  ): Promise<Grescore | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        analyticalpercentile: true,
        analyticalscore: true,
        analyticalwritingpercentile: true,
        analyticalwritingscore: true,
        applicationId: true,
        athome: true,
        datafileId: true,
        id: true,
        quantitativepercentile: true,
        quantitativescore: true,
        scorereceived: true,
        testdate: true,
        verbalpercentile: true,
        verbalscore: true,
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
  @swagger.ApiOkResponse({ type: Grescore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Grescore",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: GrescoreWhereUniqueInput,
    @common.Body() data: GrescoreUpdateInput
  ): Promise<Grescore | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          analyticalpercentile: true,
          analyticalscore: true,
          analyticalwritingpercentile: true,
          analyticalwritingscore: true,
          applicationId: true,
          athome: true,
          datafileId: true,
          id: true,
          quantitativepercentile: true,
          quantitativescore: true,
          scorereceived: true,
          testdate: true,
          verbalpercentile: true,
          verbalscore: true,
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
  @swagger.ApiOkResponse({ type: Grescore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Grescore",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: GrescoreWhereUniqueInput
  ): Promise<Grescore | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          analyticalpercentile: true,
          analyticalscore: true,
          analyticalwritingpercentile: true,
          analyticalwritingscore: true,
          applicationId: true,
          athome: true,
          datafileId: true,
          id: true,
          quantitativepercentile: true,
          quantitativescore: true,
          scorereceived: true,
          testdate: true,
          verbalpercentile: true,
          verbalscore: true,
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
