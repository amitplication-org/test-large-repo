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
import { CreateMitsSlateAppArgs } from "./CreateMitsSlateAppArgs";
import { UpdateMitsSlateAppArgs } from "./UpdateMitsSlateAppArgs";
import { DeleteMitsSlateAppArgs } from "./DeleteMitsSlateAppArgs";
import { MitsSlateAppCountArgs } from "./MitsSlateAppCountArgs";
import { MitsSlateAppFindManyArgs } from "./MitsSlateAppFindManyArgs";
import { MitsSlateAppFindUniqueArgs } from "./MitsSlateAppFindUniqueArgs";
import { MitsSlateApp } from "./MitsSlateApp";
import { MitsSlateAppService } from "../mitsSlateApp.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateApp)
export class MitsSlateAppResolverBase {
  constructor(
    protected readonly service: MitsSlateAppService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MitsSlateApp",
    action: "read",
    possession: "any",
  })
  async _mitsSlateAppsMeta(
    @graphql.Args() args: MitsSlateAppCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MitsSlateApp])
  @nestAccessControl.UseRoles({
    resource: "MitsSlateApp",
    action: "read",
    possession: "any",
  })
  async mitsSlateApps(
    @graphql.Args() args: MitsSlateAppFindManyArgs
  ): Promise<MitsSlateApp[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MitsSlateApp, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MitsSlateApp",
    action: "read",
    possession: "own",
  })
  async mitsSlateApp(
    @graphql.Args() args: MitsSlateAppFindUniqueArgs
  ): Promise<MitsSlateApp | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MitsSlateApp)
  @nestAccessControl.UseRoles({
    resource: "MitsSlateApp",
    action: "create",
    possession: "any",
  })
  async createMitsSlateApp(
    @graphql.Args() args: CreateMitsSlateAppArgs
  ): Promise<MitsSlateApp> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MitsSlateApp)
  @nestAccessControl.UseRoles({
    resource: "MitsSlateApp",
    action: "update",
    possession: "any",
  })
  async updateMitsSlateApp(
    @graphql.Args() args: UpdateMitsSlateAppArgs
  ): Promise<MitsSlateApp | null> {
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

  @graphql.Mutation(() => MitsSlateApp)
  @nestAccessControl.UseRoles({
    resource: "MitsSlateApp",
    action: "delete",
    possession: "any",
  })
  async deleteMitsSlateApp(
    @graphql.Args() args: DeleteMitsSlateAppArgs
  ): Promise<MitsSlateApp | null> {
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
