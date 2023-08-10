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
import { MseCodilityService } from "../mseCodility.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MseCodilityCreateInput } from "./MseCodilityCreateInput";
import { MseCodilityWhereInput } from "./MseCodilityWhereInput";
import { MseCodilityWhereUniqueInput } from "./MseCodilityWhereUniqueInput";
import { MseCodilityFindManyArgs } from "./MseCodilityFindManyArgs";
import { MseCodilityUpdateInput } from "./MseCodilityUpdateInput";
import { MseCodility } from "./MseCodility";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MseCodilityControllerBase {
  constructor(
    protected readonly service: MseCodilityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MseCodility })
  @nestAccessControl.UseRoles({
    resource: "MseCodility",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: MseCodilityCreateInput
  ): Promise<MseCodility> {
    return await this.service.create({
      data: data,
      select: {
        academicDegree: true,
        closeDate: true,
        createDate: true,
        email: true,
        fieldOfStudy: true,
        id: true,
        ips: true,
        lastName: true,
        lastSchoolAttended: true,
        maxScore: true,
        nick: true,
        percentCorrectness: true,
        percentPerformance: true,
        percentTotalScore: true,
        phone: true,
        profileUrl: true,
        programmingExperience: true,
        similarityCheck: true,
        startDate: true,
        task1Correctness: true,
        task1Name: true,
        task1Performance: true,
        task1Score: true,
        task2Correctness: true,
        task2Name: true,
        task2Performance: true,
        task2Score: true,
        task3Correctness: true,
        task3Name: true,
        task3Performance: true,
        task3Score: true,
        task4Correctness: true,
        task4Name: true,
        task4Performance: true,
        task4Score: true,
        test: true,
        testSessionId: true,
        timeUsed: true,
        totalScore: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MseCodility] })
  @ApiNestedQuery(MseCodilityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MseCodility",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<MseCodility[]> {
    const args = plainToClass(MseCodilityFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        academicDegree: true,
        closeDate: true,
        createDate: true,
        email: true,
        fieldOfStudy: true,
        id: true,
        ips: true,
        lastName: true,
        lastSchoolAttended: true,
        maxScore: true,
        nick: true,
        percentCorrectness: true,
        percentPerformance: true,
        percentTotalScore: true,
        phone: true,
        profileUrl: true,
        programmingExperience: true,
        similarityCheck: true,
        startDate: true,
        task1Correctness: true,
        task1Name: true,
        task1Performance: true,
        task1Score: true,
        task2Correctness: true,
        task2Name: true,
        task2Performance: true,
        task2Score: true,
        task3Correctness: true,
        task3Name: true,
        task3Performance: true,
        task3Score: true,
        task4Correctness: true,
        task4Name: true,
        task4Performance: true,
        task4Score: true,
        test: true,
        testSessionId: true,
        timeUsed: true,
        totalScore: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MseCodility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MseCodility",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MseCodilityWhereUniqueInput
  ): Promise<MseCodility | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        academicDegree: true,
        closeDate: true,
        createDate: true,
        email: true,
        fieldOfStudy: true,
        id: true,
        ips: true,
        lastName: true,
        lastSchoolAttended: true,
        maxScore: true,
        nick: true,
        percentCorrectness: true,
        percentPerformance: true,
        percentTotalScore: true,
        phone: true,
        profileUrl: true,
        programmingExperience: true,
        similarityCheck: true,
        startDate: true,
        task1Correctness: true,
        task1Name: true,
        task1Performance: true,
        task1Score: true,
        task2Correctness: true,
        task2Name: true,
        task2Performance: true,
        task2Score: true,
        task3Correctness: true,
        task3Name: true,
        task3Performance: true,
        task3Score: true,
        task4Correctness: true,
        task4Name: true,
        task4Performance: true,
        task4Score: true,
        test: true,
        testSessionId: true,
        timeUsed: true,
        totalScore: true,
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
  @swagger.ApiOkResponse({ type: MseCodility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MseCodility",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MseCodilityWhereUniqueInput,
    @common.Body() data: MseCodilityUpdateInput
  ): Promise<MseCodility | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          academicDegree: true,
          closeDate: true,
          createDate: true,
          email: true,
          fieldOfStudy: true,
          id: true,
          ips: true,
          lastName: true,
          lastSchoolAttended: true,
          maxScore: true,
          nick: true,
          percentCorrectness: true,
          percentPerformance: true,
          percentTotalScore: true,
          phone: true,
          profileUrl: true,
          programmingExperience: true,
          similarityCheck: true,
          startDate: true,
          task1Correctness: true,
          task1Name: true,
          task1Performance: true,
          task1Score: true,
          task2Correctness: true,
          task2Name: true,
          task2Performance: true,
          task2Score: true,
          task3Correctness: true,
          task3Name: true,
          task3Performance: true,
          task3Score: true,
          task4Correctness: true,
          task4Name: true,
          task4Performance: true,
          task4Score: true,
          test: true,
          testSessionId: true,
          timeUsed: true,
          totalScore: true,
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
  @swagger.ApiOkResponse({ type: MseCodility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MseCodility",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MseCodilityWhereUniqueInput
  ): Promise<MseCodility | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          academicDegree: true,
          closeDate: true,
          createDate: true,
          email: true,
          fieldOfStudy: true,
          id: true,
          ips: true,
          lastName: true,
          lastSchoolAttended: true,
          maxScore: true,
          nick: true,
          percentCorrectness: true,
          percentPerformance: true,
          percentTotalScore: true,
          phone: true,
          profileUrl: true,
          programmingExperience: true,
          similarityCheck: true,
          startDate: true,
          task1Correctness: true,
          task1Name: true,
          task1Performance: true,
          task1Score: true,
          task2Correctness: true,
          task2Name: true,
          task2Performance: true,
          task2Score: true,
          task3Correctness: true,
          task3Name: true,
          task3Performance: true,
          task3Score: true,
          task4Correctness: true,
          task4Name: true,
          task4Performance: true,
          task4Score: true,
          test: true,
          testSessionId: true,
          timeUsed: true,
          totalScore: true,
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
