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
import { CreateFailedMergeArgs } from "./CreateFailedMergeArgs";
import { UpdateFailedMergeArgs } from "./UpdateFailedMergeArgs";
import { DeleteFailedMergeArgs } from "./DeleteFailedMergeArgs";
import { FailedMergeCountArgs } from "./FailedMergeCountArgs";
import { FailedMergeFindManyArgs } from "./FailedMergeFindManyArgs";
import { FailedMergeFindUniqueArgs } from "./FailedMergeFindUniqueArgs";
import { FailedMerge } from "./FailedMerge";
import { FailedMergeService } from "../failedMerge.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FailedMerge)
export class FailedMergeResolverBase {
  constructor(
    protected readonly service: FailedMergeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FailedMerge",
    action: "read",
    possession: "any",
  })
  async _failedMergesMeta(
    @graphql.Args() args: FailedMergeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FailedMerge])
  @nestAccessControl.UseRoles({
    resource: "FailedMerge",
    action: "read",
    possession: "any",
  })
  async failedMerges(
    @graphql.Args() args: FailedMergeFindManyArgs
  ): Promise<FailedMerge[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FailedMerge, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FailedMerge",
    action: "read",
    possession: "own",
  })
  async failedMerge(
    @graphql.Args() args: FailedMergeFindUniqueArgs
  ): Promise<FailedMerge | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FailedMerge)
  @nestAccessControl.UseRoles({
    resource: "FailedMerge",
    action: "create",
    possession: "any",
  })
  async createFailedMerge(
    @graphql.Args() args: CreateFailedMergeArgs
  ): Promise<FailedMerge> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FailedMerge)
  @nestAccessControl.UseRoles({
    resource: "FailedMerge",
    action: "update",
    possession: "any",
  })
  async updateFailedMerge(
    @graphql.Args() args: UpdateFailedMergeArgs
  ): Promise<FailedMerge | null> {
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

  @graphql.Mutation(() => FailedMerge)
  @nestAccessControl.UseRoles({
    resource: "FailedMerge",
    action: "delete",
    possession: "any",
  })
  async deleteFailedMerge(
    @graphql.Args() args: DeleteFailedMergeArgs
  ): Promise<FailedMerge | null> {
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
