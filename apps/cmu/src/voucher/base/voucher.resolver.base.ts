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
import { CreateVoucherArgs } from "./CreateVoucherArgs";
import { UpdateVoucherArgs } from "./UpdateVoucherArgs";
import { DeleteVoucherArgs } from "./DeleteVoucherArgs";
import { VoucherCountArgs } from "./VoucherCountArgs";
import { VoucherFindManyArgs } from "./VoucherFindManyArgs";
import { VoucherFindUniqueArgs } from "./VoucherFindUniqueArgs";
import { Voucher } from "./Voucher";
import { VoucherService } from "../voucher.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Voucher)
export class VoucherResolverBase {
  constructor(
    protected readonly service: VoucherService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Voucher",
    action: "read",
    possession: "any",
  })
  async _vouchersMeta(
    @graphql.Args() args: VoucherCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Voucher])
  @nestAccessControl.UseRoles({
    resource: "Voucher",
    action: "read",
    possession: "any",
  })
  async vouchers(
    @graphql.Args() args: VoucherFindManyArgs
  ): Promise<Voucher[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Voucher, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Voucher",
    action: "read",
    possession: "own",
  })
  async voucher(
    @graphql.Args() args: VoucherFindUniqueArgs
  ): Promise<Voucher | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Voucher)
  @nestAccessControl.UseRoles({
    resource: "Voucher",
    action: "create",
    possession: "any",
  })
  async createVoucher(
    @graphql.Args() args: CreateVoucherArgs
  ): Promise<Voucher> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Voucher)
  @nestAccessControl.UseRoles({
    resource: "Voucher",
    action: "update",
    possession: "any",
  })
  async updateVoucher(
    @graphql.Args() args: UpdateVoucherArgs
  ): Promise<Voucher | null> {
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

  @graphql.Mutation(() => Voucher)
  @nestAccessControl.UseRoles({
    resource: "Voucher",
    action: "delete",
    possession: "any",
  })
  async deleteVoucher(
    @graphql.Args() args: DeleteVoucherArgs
  ): Promise<Voucher | null> {
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
