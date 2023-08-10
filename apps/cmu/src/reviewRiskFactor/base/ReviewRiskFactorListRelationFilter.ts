/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewRiskFactorWhereInput } from "./ReviewRiskFactorWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ReviewRiskFactorListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ReviewRiskFactorWhereInput,
  })
  @ValidateNested()
  @Type(() => ReviewRiskFactorWhereInput)
  @IsOptional()
  @Field(() => ReviewRiskFactorWhereInput, {
    nullable: true,
  })
  every?: ReviewRiskFactorWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReviewRiskFactorWhereInput,
  })
  @ValidateNested()
  @Type(() => ReviewRiskFactorWhereInput)
  @IsOptional()
  @Field(() => ReviewRiskFactorWhereInput, {
    nullable: true,
  })
  some?: ReviewRiskFactorWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReviewRiskFactorWhereInput,
  })
  @ValidateNested()
  @Type(() => ReviewRiskFactorWhereInput)
  @IsOptional()
  @Field(() => ReviewRiskFactorWhereInput, {
    nullable: true,
  })
  none?: ReviewRiskFactorWhereInput;
}
export { ReviewRiskFactorListRelationFilter as ReviewRiskFactorListRelationFilter };
