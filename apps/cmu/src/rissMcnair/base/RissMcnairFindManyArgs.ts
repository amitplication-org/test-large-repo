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
import { RissMcnairWhereInput } from "./RissMcnairWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RissMcnairOrderByInput } from "./RissMcnairOrderByInput";

@ArgsType()
class RissMcnairFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RissMcnairWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RissMcnairWhereInput, { nullable: true })
  @Type(() => RissMcnairWhereInput)
  where?: RissMcnairWhereInput;

  @ApiProperty({
    required: false,
    type: [RissMcnairOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RissMcnairOrderByInput], { nullable: true })
  @Type(() => RissMcnairOrderByInput)
  orderBy?: Array<RissMcnairOrderByInput>;

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

export { RissMcnairFindManyArgs as RissMcnairFindManyArgs };
