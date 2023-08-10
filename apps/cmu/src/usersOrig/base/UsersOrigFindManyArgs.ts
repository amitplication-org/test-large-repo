/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UsersOrigWhereInput } from "./UsersOrigWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UsersOrigOrderByInput } from "./UsersOrigOrderByInput";

@ArgsType()
class UsersOrigFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UsersOrigWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UsersOrigWhereInput, { nullable: true })
  @Type(() => UsersOrigWhereInput)
  where?: UsersOrigWhereInput;

  @ApiProperty({
    required: false,
    type: [UsersOrigOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UsersOrigOrderByInput], { nullable: true })
  @Type(() => UsersOrigOrderByInput)
  orderBy?: Array<UsersOrigOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UsersOrigFindManyArgs as UsersOrigFindManyArgs };
