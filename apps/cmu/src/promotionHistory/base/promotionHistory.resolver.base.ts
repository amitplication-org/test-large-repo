/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreatePromotionHistoryArgs } from "./CreatePromotionHistoryArgs";
import { UpdatePromotionHistoryArgs } from "./UpdatePromotionHistoryArgs";
import { DeletePromotionHistoryArgs } from "./DeletePromotionHistoryArgs";
import { PromotionHistoryCountArgs } from "./PromotionHistoryCountArgs";
import { PromotionHistoryFindManyArgs } from "./PromotionHistoryFindManyArgs";
import { PromotionHistoryFindUniqueArgs } from "./PromotionHistoryFindUniqueArgs";
import { PromotionHistory } from "./PromotionHistory";
import { PromotionHistoryService } from "../promotionHistory.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PromotionHistory)
export class PromotionHistoryResolverBase {
  constructor(
    protected readonly service: PromotionHistoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PromotionHistory",
    action: "read",
    possession: "any",
  })
  async _promotionHistoriesMeta(
    @graphql.Args() args: PromotionHistoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PromotionHistory])
  @nestAccessControl.UseRoles({
    resource: "PromotionHistory",
    action: "read",
    possession: "any",
  })
  async promotionHistories(
    @graphql.Args() args: PromotionHistoryFindManyArgs
  ): Promise<PromotionHistory[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PromotionHistory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PromotionHistory",
    action: "read",
    possession: "own",
  })
  async promotionHistory(
    @graphql.Args() args: PromotionHistoryFindUniqueArgs
  ): Promise<PromotionHistory | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PromotionHistory)
  @nestAccessControl.UseRoles({
    resource: "PromotionHistory",
    action: "create",
    possession: "any",
  })
  async createPromotionHistory(
    @graphql.Args() args: CreatePromotionHistoryArgs
  ): Promise<PromotionHistory> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PromotionHistory)
  @nestAccessControl.UseRoles({
    resource: "PromotionHistory",
    action: "update",
    possession: "any",
  })
  async updatePromotionHistory(
    @graphql.Args() args: UpdatePromotionHistoryArgs
  ): Promise<PromotionHistory | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PromotionHistory)
  @nestAccessControl.UseRoles({
    resource: "PromotionHistory",
    action: "delete",
    possession: "any",
  })
  async deletePromotionHistory(
    @graphql.Args() args: DeletePromotionHistoryArgs
  ): Promise<PromotionHistory | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
