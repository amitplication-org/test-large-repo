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
import { CreateRecommendformArgs } from "./CreateRecommendformArgs";
import { UpdateRecommendformArgs } from "./UpdateRecommendformArgs";
import { DeleteRecommendformArgs } from "./DeleteRecommendformArgs";
import { RecommendformCountArgs } from "./RecommendformCountArgs";
import { RecommendformFindManyArgs } from "./RecommendformFindManyArgs";
import { RecommendformFindUniqueArgs } from "./RecommendformFindUniqueArgs";
import { Recommendform } from "./Recommendform";
import { RecommendformService } from "../recommendform.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Recommendform)
export class RecommendformResolverBase {
  constructor(
    protected readonly service: RecommendformService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Recommendform",
    action: "read",
    possession: "any",
  })
  async _recommendformsMeta(
    @graphql.Args() args: RecommendformCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Recommendform])
  @nestAccessControl.UseRoles({
    resource: "Recommendform",
    action: "read",
    possession: "any",
  })
  async recommendforms(
    @graphql.Args() args: RecommendformFindManyArgs
  ): Promise<Recommendform[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Recommendform, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Recommendform",
    action: "read",
    possession: "own",
  })
  async recommendform(
    @graphql.Args() args: RecommendformFindUniqueArgs
  ): Promise<Recommendform | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Recommendform)
  @nestAccessControl.UseRoles({
    resource: "Recommendform",
    action: "create",
    possession: "any",
  })
  async createRecommendform(
    @graphql.Args() args: CreateRecommendformArgs
  ): Promise<Recommendform> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Recommendform)
  @nestAccessControl.UseRoles({
    resource: "Recommendform",
    action: "update",
    possession: "any",
  })
  async updateRecommendform(
    @graphql.Args() args: UpdateRecommendformArgs
  ): Promise<Recommendform | null> {
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

  @graphql.Mutation(() => Recommendform)
  @nestAccessControl.UseRoles({
    resource: "Recommendform",
    action: "delete",
    possession: "any",
  })
  async deleteRecommendform(
    @graphql.Args() args: DeleteRecommendformArgs
  ): Promise<Recommendform | null> {
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
