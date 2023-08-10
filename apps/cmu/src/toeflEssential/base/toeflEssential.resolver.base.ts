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
import { CreateToeflEssentialArgs } from "./CreateToeflEssentialArgs";
import { UpdateToeflEssentialArgs } from "./UpdateToeflEssentialArgs";
import { DeleteToeflEssentialArgs } from "./DeleteToeflEssentialArgs";
import { ToeflEssentialCountArgs } from "./ToeflEssentialCountArgs";
import { ToeflEssentialFindManyArgs } from "./ToeflEssentialFindManyArgs";
import { ToeflEssentialFindUniqueArgs } from "./ToeflEssentialFindUniqueArgs";
import { ToeflEssential } from "./ToeflEssential";
import { ToeflEssentialService } from "../toeflEssential.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ToeflEssential)
export class ToeflEssentialResolverBase {
  constructor(
    protected readonly service: ToeflEssentialService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ToeflEssential",
    action: "read",
    possession: "any",
  })
  async _toeflEssentialsMeta(
    @graphql.Args() args: ToeflEssentialCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ToeflEssential])
  @nestAccessControl.UseRoles({
    resource: "ToeflEssential",
    action: "read",
    possession: "any",
  })
  async toeflEssentials(
    @graphql.Args() args: ToeflEssentialFindManyArgs
  ): Promise<ToeflEssential[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ToeflEssential, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ToeflEssential",
    action: "read",
    possession: "own",
  })
  async toeflEssential(
    @graphql.Args() args: ToeflEssentialFindUniqueArgs
  ): Promise<ToeflEssential | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ToeflEssential)
  @nestAccessControl.UseRoles({
    resource: "ToeflEssential",
    action: "create",
    possession: "any",
  })
  async createToeflEssential(
    @graphql.Args() args: CreateToeflEssentialArgs
  ): Promise<ToeflEssential> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ToeflEssential)
  @nestAccessControl.UseRoles({
    resource: "ToeflEssential",
    action: "update",
    possession: "any",
  })
  async updateToeflEssential(
    @graphql.Args() args: UpdateToeflEssentialArgs
  ): Promise<ToeflEssential | null> {
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

  @graphql.Mutation(() => ToeflEssential)
  @nestAccessControl.UseRoles({
    resource: "ToeflEssential",
    action: "delete",
    possession: "any",
  })
  async deleteToeflEssential(
    @graphql.Args() args: DeleteToeflEssentialArgs
  ): Promise<ToeflEssential | null> {
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
