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
import { ApplicationDecisionWhereInput } from "./ApplicationDecisionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ApplicationDecisionOrderByInput } from "./ApplicationDecisionOrderByInput";

@ArgsType()
class ApplicationDecisionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ApplicationDecisionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ApplicationDecisionWhereInput, { nullable: true })
  @Type(() => ApplicationDecisionWhereInput)
  where?: ApplicationDecisionWhereInput;

  @ApiProperty({
    required: false,
    type: [ApplicationDecisionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ApplicationDecisionOrderByInput], { nullable: true })
  @Type(() => ApplicationDecisionOrderByInput)
  orderBy?: Array<ApplicationDecisionOrderByInput>;

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

export { ApplicationDecisionFindManyArgs as ApplicationDecisionFindManyArgs };
