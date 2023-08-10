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
import { SlateReviewWhereInput } from "./SlateReviewWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SlateReviewOrderByInput } from "./SlateReviewOrderByInput";

@ArgsType()
class SlateReviewFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SlateReviewWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SlateReviewWhereInput, { nullable: true })
  @Type(() => SlateReviewWhereInput)
  where?: SlateReviewWhereInput;

  @ApiProperty({
    required: false,
    type: [SlateReviewOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SlateReviewOrderByInput], { nullable: true })
  @Type(() => SlateReviewOrderByInput)
  orderBy?: Array<SlateReviewOrderByInput>;

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

export { SlateReviewFindManyArgs as SlateReviewFindManyArgs };
