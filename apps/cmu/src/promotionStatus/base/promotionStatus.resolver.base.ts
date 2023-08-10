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
import { CreatePromotionStatusArgs } from "./CreatePromotionStatusArgs";
import { UpdatePromotionStatusArgs } from "./UpdatePromotionStatusArgs";
import { DeletePromotionStatusArgs } from "./DeletePromotionStatusArgs";
import { PromotionStatusCountArgs } from "./PromotionStatusCountArgs";
import { PromotionStatusFindManyArgs } from "./PromotionStatusFindManyArgs";
import { PromotionStatusFindUniqueArgs } from "./PromotionStatusFindUniqueArgs";
import { PromotionStatus } from "./PromotionStatus";
import { PromotionStatusService } from "../promotionStatus.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PromotionStatus)
export class PromotionStatusResolverBase {
  constructor(
    protected readonly service: PromotionStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PromotionStatus",
    action: "read",
    possession: "any",
  })
  async _promotionStatusesMeta(
    @graphql.Args() args: PromotionStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PromotionStatus])
  @nestAccessControl.UseRoles({
    resource: "PromotionStatus",
    action: "read",
    possession: "any",
  })
  async promotionStatuses(
    @graphql.Args() args: PromotionStatusFindManyArgs
  ): Promise<PromotionStatus[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PromotionStatus, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PromotionStatus",
    action: "read",
    possession: "own",
  })
  async promotionStatus(
    @graphql.Args() args: PromotionStatusFindUniqueArgs
  ): Promise<PromotionStatus | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PromotionStatus)
  @nestAccessControl.UseRoles({
    resource: "PromotionStatus",
    action: "create",
    possession: "any",
  })
  async createPromotionStatus(
    @graphql.Args() args: CreatePromotionStatusArgs
  ): Promise<PromotionStatus> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PromotionStatus)
  @nestAccessControl.UseRoles({
    resource: "PromotionStatus",
    action: "update",
    possession: "any",
  })
  async updatePromotionStatus(
    @graphql.Args() args: UpdatePromotionStatusArgs
  ): Promise<PromotionStatus | null> {
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

  @graphql.Mutation(() => PromotionStatus)
  @nestAccessControl.UseRoles({
    resource: "PromotionStatus",
    action: "delete",
    possession: "any",
  })
  async deletePromotionStatus(
    @graphql.Args() args: DeletePromotionStatusArgs
  ): Promise<PromotionStatus | null> {
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
