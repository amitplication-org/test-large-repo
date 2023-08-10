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
import { SlateRecommend1Service } from "../slateRecommend1.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SlateRecommend1CreateInput } from "./SlateRecommend1CreateInput";
import { SlateRecommend1WhereInput } from "./SlateRecommend1WhereInput";
import { SlateRecommend1WhereUniqueInput } from "./SlateRecommend1WhereUniqueInput";
import { SlateRecommend1FindManyArgs } from "./SlateRecommend1FindManyArgs";
import { SlateRecommend1UpdateInput } from "./SlateRecommend1UpdateInput";
import { SlateRecommend1 } from "./SlateRecommend1";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SlateRecommend1ControllerBase {
  constructor(
    protected readonly service: SlateRecommend1Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SlateRecommend1 })
  @nestAccessControl.UseRoles({
    resource: "SlateRecommend1",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: SlateRecommend1CreateInput
  ): Promise<SlateRecommend1> {
    return await this.service.create({
      data: data,
      select: {
        first: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
        reference1Email: true,
        reference1First: true,
        reference1Industry: true,
        reference1Last: true,
        reference1Organization: true,
        reference1Phone: true,
        reference1Submitted: true,
        reference1Title: true,
        reference1Type: true,
        referenceNum1IsrmsRecommenderScore1: true,
        referenceNum1IsrmsRecommenderScore10: true,
        referenceNum1IsrmsRecommenderScore11: true,
        referenceNum1IsrmsRecommenderScore12: true,
        referenceNum1IsrmsRecommenderScore13: true,
        referenceNum1IsrmsRecommenderScore14: true,
        referenceNum1IsrmsRecommenderScore15: true,
        referenceNum1IsrmsRecommenderScore2: true,
        referenceNum1IsrmsRecommenderScore3: true,
        referenceNum1IsrmsRecommenderScore4: true,
        referenceNum1IsrmsRecommenderScore5: true,
        referenceNum1IsrmsRecommenderScore6: true,
        referenceNum1IsrmsRecommenderScore7: true,
        referenceNum1IsrmsRecommenderScore8: true,
        referenceNum1IsrmsRecommenderScore9: true,
        referenceNum1MseRecommendationAdditional: true,
        referenceNum1MseRecommendationComparison: true,
        referenceNum1MseRecommendationHowKnown: true,
        referenceNum1MseRecommendationProjectPerformance: true,
        referenceNum1MseRecommendationStrengthsWeakness: true,
        referenceNum1RecommenderScore1: true,
        referenceNum1RecommenderScore2: true,
        referenceNum1RecommenderScore3: true,
        referenceNum1RecommenderScore4: true,
        referenceNum1RecommenderScore5: true,
        referenceNum1RecommenderScore6: true,
        referenceNum1RecommenderScore7: true,
        referenceNum1RecommenderScore8: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SlateRecommend1] })
  @ApiNestedQuery(SlateRecommend1FindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SlateRecommend1",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<SlateRecommend1[]> {
    const args = plainToClass(SlateRecommend1FindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        first: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
        reference1Email: true,
        reference1First: true,
        reference1Industry: true,
        reference1Last: true,
        reference1Organization: true,
        reference1Phone: true,
        reference1Submitted: true,
        reference1Title: true,
        reference1Type: true,
        referenceNum1IsrmsRecommenderScore1: true,
        referenceNum1IsrmsRecommenderScore10: true,
        referenceNum1IsrmsRecommenderScore11: true,
        referenceNum1IsrmsRecommenderScore12: true,
        referenceNum1IsrmsRecommenderScore13: true,
        referenceNum1IsrmsRecommenderScore14: true,
        referenceNum1IsrmsRecommenderScore15: true,
        referenceNum1IsrmsRecommenderScore2: true,
        referenceNum1IsrmsRecommenderScore3: true,
        referenceNum1IsrmsRecommenderScore4: true,
        referenceNum1IsrmsRecommenderScore5: true,
        referenceNum1IsrmsRecommenderScore6: true,
        referenceNum1IsrmsRecommenderScore7: true,
        referenceNum1IsrmsRecommenderScore8: true,
        referenceNum1IsrmsRecommenderScore9: true,
        referenceNum1MseRecommendationAdditional: true,
        referenceNum1MseRecommendationComparison: true,
        referenceNum1MseRecommendationHowKnown: true,
        referenceNum1MseRecommendationProjectPerformance: true,
        referenceNum1MseRecommendationStrengthsWeakness: true,
        referenceNum1RecommenderScore1: true,
        referenceNum1RecommenderScore2: true,
        referenceNum1RecommenderScore3: true,
        referenceNum1RecommenderScore4: true,
        referenceNum1RecommenderScore5: true,
        referenceNum1RecommenderScore6: true,
        referenceNum1RecommenderScore7: true,
        referenceNum1RecommenderScore8: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SlateRecommend1 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SlateRecommend1",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: SlateRecommend1WhereUniqueInput
  ): Promise<SlateRecommend1 | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        first: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
        reference1Email: true,
        reference1First: true,
        reference1Industry: true,
        reference1Last: true,
        reference1Organization: true,
        reference1Phone: true,
        reference1Submitted: true,
        reference1Title: true,
        reference1Type: true,
        referenceNum1IsrmsRecommenderScore1: true,
        referenceNum1IsrmsRecommenderScore10: true,
        referenceNum1IsrmsRecommenderScore11: true,
        referenceNum1IsrmsRecommenderScore12: true,
        referenceNum1IsrmsRecommenderScore13: true,
        referenceNum1IsrmsRecommenderScore14: true,
        referenceNum1IsrmsRecommenderScore15: true,
        referenceNum1IsrmsRecommenderScore2: true,
        referenceNum1IsrmsRecommenderScore3: true,
        referenceNum1IsrmsRecommenderScore4: true,
        referenceNum1IsrmsRecommenderScore5: true,
        referenceNum1IsrmsRecommenderScore6: true,
        referenceNum1IsrmsRecommenderScore7: true,
        referenceNum1IsrmsRecommenderScore8: true,
        referenceNum1IsrmsRecommenderScore9: true,
        referenceNum1MseRecommendationAdditional: true,
        referenceNum1MseRecommendationComparison: true,
        referenceNum1MseRecommendationHowKnown: true,
        referenceNum1MseRecommendationProjectPerformance: true,
        referenceNum1MseRecommendationStrengthsWeakness: true,
        referenceNum1RecommenderScore1: true,
        referenceNum1RecommenderScore2: true,
        referenceNum1RecommenderScore3: true,
        referenceNum1RecommenderScore4: true,
        referenceNum1RecommenderScore5: true,
        referenceNum1RecommenderScore6: true,
        referenceNum1RecommenderScore7: true,
        referenceNum1RecommenderScore8: true,
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
  @swagger.ApiOkResponse({ type: SlateRecommend1 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SlateRecommend1",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SlateRecommend1WhereUniqueInput,
    @common.Body() data: SlateRecommend1UpdateInput
  ): Promise<SlateRecommend1 | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          first: true,
          id: true,
          last: true,
          middle: true,
          prefix: true,
          reference1Email: true,
          reference1First: true,
          reference1Industry: true,
          reference1Last: true,
          reference1Organization: true,
          reference1Phone: true,
          reference1Submitted: true,
          reference1Title: true,
          reference1Type: true,
          referenceNum1IsrmsRecommenderScore1: true,
          referenceNum1IsrmsRecommenderScore10: true,
          referenceNum1IsrmsRecommenderScore11: true,
          referenceNum1IsrmsRecommenderScore12: true,
          referenceNum1IsrmsRecommenderScore13: true,
          referenceNum1IsrmsRecommenderScore14: true,
          referenceNum1IsrmsRecommenderScore15: true,
          referenceNum1IsrmsRecommenderScore2: true,
          referenceNum1IsrmsRecommenderScore3: true,
          referenceNum1IsrmsRecommenderScore4: true,
          referenceNum1IsrmsRecommenderScore5: true,
          referenceNum1IsrmsRecommenderScore6: true,
          referenceNum1IsrmsRecommenderScore7: true,
          referenceNum1IsrmsRecommenderScore8: true,
          referenceNum1IsrmsRecommenderScore9: true,
          referenceNum1MseRecommendationAdditional: true,
          referenceNum1MseRecommendationComparison: true,
          referenceNum1MseRecommendationHowKnown: true,
          referenceNum1MseRecommendationProjectPerformance: true,
          referenceNum1MseRecommendationStrengthsWeakness: true,
          referenceNum1RecommenderScore1: true,
          referenceNum1RecommenderScore2: true,
          referenceNum1RecommenderScore3: true,
          referenceNum1RecommenderScore4: true,
          referenceNum1RecommenderScore5: true,
          referenceNum1RecommenderScore6: true,
          referenceNum1RecommenderScore7: true,
          referenceNum1RecommenderScore8: true,
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
  @swagger.ApiOkResponse({ type: SlateRecommend1 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SlateRecommend1",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: SlateRecommend1WhereUniqueInput
  ): Promise<SlateRecommend1 | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          first: true,
          id: true,
          last: true,
          middle: true,
          prefix: true,
          reference1Email: true,
          reference1First: true,
          reference1Industry: true,
          reference1Last: true,
          reference1Organization: true,
          reference1Phone: true,
          reference1Submitted: true,
          reference1Title: true,
          reference1Type: true,
          referenceNum1IsrmsRecommenderScore1: true,
          referenceNum1IsrmsRecommenderScore10: true,
          referenceNum1IsrmsRecommenderScore11: true,
          referenceNum1IsrmsRecommenderScore12: true,
          referenceNum1IsrmsRecommenderScore13: true,
          referenceNum1IsrmsRecommenderScore14: true,
          referenceNum1IsrmsRecommenderScore15: true,
          referenceNum1IsrmsRecommenderScore2: true,
          referenceNum1IsrmsRecommenderScore3: true,
          referenceNum1IsrmsRecommenderScore4: true,
          referenceNum1IsrmsRecommenderScore5: true,
          referenceNum1IsrmsRecommenderScore6: true,
          referenceNum1IsrmsRecommenderScore7: true,
          referenceNum1IsrmsRecommenderScore8: true,
          referenceNum1IsrmsRecommenderScore9: true,
          referenceNum1MseRecommendationAdditional: true,
          referenceNum1MseRecommendationComparison: true,
          referenceNum1MseRecommendationHowKnown: true,
          referenceNum1MseRecommendationProjectPerformance: true,
          referenceNum1MseRecommendationStrengthsWeakness: true,
          referenceNum1RecommenderScore1: true,
          referenceNum1RecommenderScore2: true,
          referenceNum1RecommenderScore3: true,
          referenceNum1RecommenderScore4: true,
          referenceNum1RecommenderScore5: true,
          referenceNum1RecommenderScore6: true,
          referenceNum1RecommenderScore7: true,
          referenceNum1RecommenderScore8: true,
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
