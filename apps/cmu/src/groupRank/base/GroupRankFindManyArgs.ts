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
import { GroupRankWhereInput } from "./GroupRankWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GroupRankOrderByInput } from "./GroupRankOrderByInput";

@ArgsType()
class GroupRankFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GroupRankWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GroupRankWhereInput, { nullable: true })
  @Type(() => GroupRankWhereInput)
  where?: GroupRankWhereInput;

  @ApiProperty({
    required: false,
    type: [GroupRankOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GroupRankOrderByInput], { nullable: true })
  @Type(() => GroupRankOrderByInput)
  orderBy?: Array<GroupRankOrderByInput>;

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

export { GroupRankFindManyArgs as GroupRankFindManyArgs };
