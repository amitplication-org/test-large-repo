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
import { CreateMseCodilityArgs } from "./CreateMseCodilityArgs";
import { UpdateMseCodilityArgs } from "./UpdateMseCodilityArgs";
import { DeleteMseCodilityArgs } from "./DeleteMseCodilityArgs";
import { MseCodilityCountArgs } from "./MseCodilityCountArgs";
import { MseCodilityFindManyArgs } from "./MseCodilityFindManyArgs";
import { MseCodilityFindUniqueArgs } from "./MseCodilityFindUniqueArgs";
import { MseCodility } from "./MseCodility";
import { MseCodilityService } from "../mseCodility.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MseCodility)
export class MseCodilityResolverBase {
  constructor(
    protected readonly service: MseCodilityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MseCodility",
    action: "read",
    possession: "any",
  })
  async _mseCodilitiesMeta(
    @graphql.Args() args: MseCodilityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MseCodility])
  @nestAccessControl.UseRoles({
    resource: "MseCodility",
    action: "read",
    possession: "any",
  })
  async mseCodilities(
    @graphql.Args() args: MseCodilityFindManyArgs
  ): Promise<MseCodility[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MseCodility, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MseCodility",
    action: "read",
    possession: "own",
  })
  async mseCodility(
    @graphql.Args() args: MseCodilityFindUniqueArgs
  ): Promise<MseCodility | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MseCodility)
  @nestAccessControl.UseRoles({
    resource: "MseCodility",
    action: "create",
    possession: "any",
  })
  async createMseCodility(
    @graphql.Args() args: CreateMseCodilityArgs
  ): Promise<MseCodility> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MseCodility)
  @nestAccessControl.UseRoles({
    resource: "MseCodility",
    action: "update",
    possession: "any",
  })
  async updateMseCodility(
    @graphql.Args() args: UpdateMseCodilityArgs
  ): Promise<MseCodility | null> {
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

  @graphql.Mutation(() => MseCodility)
  @nestAccessControl.UseRoles({
    resource: "MseCodility",
    action: "delete",
    possession: "any",
  })
  async deleteMseCodility(
    @graphql.Args() args: DeleteMseCodilityArgs
  ): Promise<MseCodility | null> {
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
