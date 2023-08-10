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
import { CommitteeWhereInput } from "./CommitteeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CommitteeOrderByInput } from "./CommitteeOrderByInput";

@ArgsType()
class CommitteeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CommitteeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CommitteeWhereInput, { nullable: true })
  @Type(() => CommitteeWhereInput)
  where?: CommitteeWhereInput;

  @ApiProperty({
    required: false,
    type: [CommitteeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CommitteeOrderByInput], { nullable: true })
  @Type(() => CommitteeOrderByInput)
  orderBy?: Array<CommitteeOrderByInput>;

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

export { CommitteeFindManyArgs as CommitteeFindManyArgs };
