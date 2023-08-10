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
import { MitsSlateCodilityService } from "../mitsSlateCodility.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MitsSlateCodilityCreateInput } from "./MitsSlateCodilityCreateInput";
import { MitsSlateCodilityWhereInput } from "./MitsSlateCodilityWhereInput";
import { MitsSlateCodilityWhereUniqueInput } from "./MitsSlateCodilityWhereUniqueInput";
import { MitsSlateCodilityFindManyArgs } from "./MitsSlateCodilityFindManyArgs";
import { MitsSlateCodilityUpdateInput } from "./MitsSlateCodilityUpdateInput";
import { MitsSlateCodility } from "./MitsSlateCodility";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MitsSlateCodilityControllerBase {
  constructor(
    protected readonly service: MitsSlateCodilityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MitsSlateCodility })
  @nestAccessControl.UseRoles({
    resource: "MitsSlateCodility",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: MitsSlateCodilityCreateInput
  ): Promise<MitsSlateCodility> {
    return await this.service.create({
      data: data,
      select: {
        codilityCloseDate: true,
        codilityCreateDate: true,
        codilityIpAddresses: true,
        codilityMaxScore: true,
        codilityPercentCorrectness: true,
        codilityPercentPerformance: true,
        codilityPercentTotalScore: true,
        codilityScore: true,
        codilitySimilarity: true,
        codilityStartDate: true,
        codilityTask1Correctness: true,
        codilityTask1Difficulty: true,
        codilityTask1Language: true,
        codilityTask1Name: true,
        codilityTask1Performance: true,
        codilityTask1Score: true,
        codilityTask2Correctness: true,
        codilityTask2Difficulty: true,
        codilityTask2Language: true,
        codilityTask2Name: true,
        codilityTask2Performance: true,
        codilityTask2Score: true,
        codilityTask3Correctness: true,
        codilityTask3Difficulty: true,
        codilityTask3Language: true,
        codilityTask3Name: true,
        codilityTask3Performance: true,
        codilityTask3Score: true,
        codilityTask4Correctness: true,
        codilityTask4Difficulty: true,
        codilityTask4Language: true,
        codilityTask4Name: true,
        codilityTask4Performance: true,
        codilityTask4Score: true,
        codilityTestName: true,
        codilityTestSession: true,
        first: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MitsSlateCodility] })
  @ApiNestedQuery(MitsSlateCodilityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MitsSlateCodility",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<MitsSlateCodility[]> {
    const args = plainToClass(MitsSlateCodilityFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        codilityCloseDate: true,
        codilityCreateDate: true,
        codilityIpAddresses: true,
        codilityMaxScore: true,
        codilityPercentCorrectness: true,
        codilityPercentPerformance: true,
        codilityPercentTotalScore: true,
        codilityScore: true,
        codilitySimilarity: true,
        codilityStartDate: true,
        codilityTask1Correctness: true,
        codilityTask1Difficulty: true,
        codilityTask1Language: true,
        codilityTask1Name: true,
        codilityTask1Performance: true,
        codilityTask1Score: true,
        codilityTask2Correctness: true,
        codilityTask2Difficulty: true,
        codilityTask2Language: true,
        codilityTask2Name: true,
        codilityTask2Performance: true,
        codilityTask2Score: true,
        codilityTask3Correctness: true,
        codilityTask3Difficulty: true,
        codilityTask3Language: true,
        codilityTask3Name: true,
        codilityTask3Performance: true,
        codilityTask3Score: true,
        codilityTask4Correctness: true,
        codilityTask4Difficulty: true,
        codilityTask4Language: true,
        codilityTask4Name: true,
        codilityTask4Performance: true,
        codilityTask4Score: true,
        codilityTestName: true,
        codilityTestSession: true,
        first: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MitsSlateCodility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MitsSlateCodility",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MitsSlateCodilityWhereUniqueInput
  ): Promise<MitsSlateCodility | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        codilityCloseDate: true,
        codilityCreateDate: true,
        codilityIpAddresses: true,
        codilityMaxScore: true,
        codilityPercentCorrectness: true,
        codilityPercentPerformance: true,
        codilityPercentTotalScore: true,
        codilityScore: true,
        codilitySimilarity: true,
        codilityStartDate: true,
        codilityTask1Correctness: true,
        codilityTask1Difficulty: true,
        codilityTask1Language: true,
        codilityTask1Name: true,
        codilityTask1Performance: true,
        codilityTask1Score: true,
        codilityTask2Correctness: true,
        codilityTask2Difficulty: true,
        codilityTask2Language: true,
        codilityTask2Name: true,
        codilityTask2Performance: true,
        codilityTask2Score: true,
        codilityTask3Correctness: true,
        codilityTask3Difficulty: true,
        codilityTask3Language: true,
        codilityTask3Name: true,
        codilityTask3Performance: true,
        codilityTask3Score: true,
        codilityTask4Correctness: true,
        codilityTask4Difficulty: true,
        codilityTask4Language: true,
        codilityTask4Name: true,
        codilityTask4Performance: true,
        codilityTask4Score: true,
        codilityTestName: true,
        codilityTestSession: true,
        first: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
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
  @swagger.ApiOkResponse({ type: MitsSlateCodility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MitsSlateCodility",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MitsSlateCodilityWhereUniqueInput,
    @common.Body() data: MitsSlateCodilityUpdateInput
  ): Promise<MitsSlateCodility | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          codilityCloseDate: true,
          codilityCreateDate: true,
          codilityIpAddresses: true,
          codilityMaxScore: true,
          codilityPercentCorrectness: true,
          codilityPercentPerformance: true,
          codilityPercentTotalScore: true,
          codilityScore: true,
          codilitySimilarity: true,
          codilityStartDate: true,
          codilityTask1Correctness: true,
          codilityTask1Difficulty: true,
          codilityTask1Language: true,
          codilityTask1Name: true,
          codilityTask1Performance: true,
          codilityTask1Score: true,
          codilityTask2Correctness: true,
          codilityTask2Difficulty: true,
          codilityTask2Language: true,
          codilityTask2Name: true,
          codilityTask2Performance: true,
          codilityTask2Score: true,
          codilityTask3Correctness: true,
          codilityTask3Difficulty: true,
          codilityTask3Language: true,
          codilityTask3Name: true,
          codilityTask3Performance: true,
          codilityTask3Score: true,
          codilityTask4Correctness: true,
          codilityTask4Difficulty: true,
          codilityTask4Language: true,
          codilityTask4Name: true,
          codilityTask4Performance: true,
          codilityTask4Score: true,
          codilityTestName: true,
          codilityTestSession: true,
          first: true,
          id: true,
          last: true,
          middle: true,
          prefix: true,
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
  @swagger.ApiOkResponse({ type: MitsSlateCodility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MitsSlateCodility",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MitsSlateCodilityWhereUniqueInput
  ): Promise<MitsSlateCodility | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          codilityCloseDate: true,
          codilityCreateDate: true,
          codilityIpAddresses: true,
          codilityMaxScore: true,
          codilityPercentCorrectness: true,
          codilityPercentPerformance: true,
          codilityPercentTotalScore: true,
          codilityScore: true,
          codilitySimilarity: true,
          codilityStartDate: true,
          codilityTask1Correctness: true,
          codilityTask1Difficulty: true,
          codilityTask1Language: true,
          codilityTask1Name: true,
          codilityTask1Performance: true,
          codilityTask1Score: true,
          codilityTask2Correctness: true,
          codilityTask2Difficulty: true,
          codilityTask2Language: true,
          codilityTask2Name: true,
          codilityTask2Performance: true,
          codilityTask2Score: true,
          codilityTask3Correctness: true,
          codilityTask3Difficulty: true,
          codilityTask3Language: true,
          codilityTask3Name: true,
          codilityTask3Performance: true,
          codilityTask3Score: true,
          codilityTask4Correctness: true,
          codilityTask4Difficulty: true,
          codilityTask4Language: true,
          codilityTask4Name: true,
          codilityTask4Performance: true,
          codilityTask4Score: true,
          codilityTestName: true,
          codilityTestSession: true,
          first: true,
          id: true,
          last: true,
          middle: true,
          prefix: true,
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
