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
import { CreateIeltsscoreArgs } from "./CreateIeltsscoreArgs";
import { UpdateIeltsscoreArgs } from "./UpdateIeltsscoreArgs";
import { DeleteIeltsscoreArgs } from "./DeleteIeltsscoreArgs";
import { IeltsscoreCountArgs } from "./IeltsscoreCountArgs";
import { IeltsscoreFindManyArgs } from "./IeltsscoreFindManyArgs";
import { IeltsscoreFindUniqueArgs } from "./IeltsscoreFindUniqueArgs";
import { Ieltsscore } from "./Ieltsscore";
import { IeltsscoreService } from "../ieltsscore.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Ieltsscore)
export class IeltsscoreResolverBase {
  constructor(
    protected readonly service: IeltsscoreService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Ieltsscore",
    action: "read",
    possession: "any",
  })
  async _ieltsscoresMeta(
    @graphql.Args() args: IeltsscoreCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Ieltsscore])
  @nestAccessControl.UseRoles({
    resource: "Ieltsscore",
    action: "read",
    possession: "any",
  })
  async ieltsscores(
    @graphql.Args() args: IeltsscoreFindManyArgs
  ): Promise<Ieltsscore[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Ieltsscore, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Ieltsscore",
    action: "read",
    possession: "own",
  })
  async ieltsscore(
    @graphql.Args() args: IeltsscoreFindUniqueArgs
  ): Promise<Ieltsscore | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Ieltsscore)
  @nestAccessControl.UseRoles({
    resource: "Ieltsscore",
    action: "create",
    possession: "any",
  })
  async createIeltsscore(
    @graphql.Args() args: CreateIeltsscoreArgs
  ): Promise<Ieltsscore> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Ieltsscore)
  @nestAccessControl.UseRoles({
    resource: "Ieltsscore",
    action: "update",
    possession: "any",
  })
  async updateIeltsscore(
    @graphql.Args() args: UpdateIeltsscoreArgs
  ): Promise<Ieltsscore | null> {
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

  @graphql.Mutation(() => Ieltsscore)
  @nestAccessControl.UseRoles({
    resource: "Ieltsscore",
    action: "delete",
    possession: "any",
  })
  async deleteIeltsscore(
    @graphql.Args() args: DeleteIeltsscoreArgs
  ): Promise<Ieltsscore | null> {
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
