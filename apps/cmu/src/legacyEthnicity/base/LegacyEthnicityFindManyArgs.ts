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
import { LegacyEthnicityWhereInput } from "./LegacyEthnicityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LegacyEthnicityOrderByInput } from "./LegacyEthnicityOrderByInput";

@ArgsType()
class LegacyEthnicityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LegacyEthnicityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LegacyEthnicityWhereInput, { nullable: true })
  @Type(() => LegacyEthnicityWhereInput)
  where?: LegacyEthnicityWhereInput;

  @ApiProperty({
    required: false,
    type: [LegacyEthnicityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LegacyEthnicityOrderByInput], { nullable: true })
  @Type(() => LegacyEthnicityOrderByInput)
  orderBy?: Array<LegacyEthnicityOrderByInput>;

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

export { LegacyEthnicityFindManyArgs as LegacyEthnicityFindManyArgs };
