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
import { MitsSlateCodilityWhereInput } from "./MitsSlateCodilityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MitsSlateCodilityOrderByInput } from "./MitsSlateCodilityOrderByInput";

@ArgsType()
class MitsSlateCodilityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MitsSlateCodilityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MitsSlateCodilityWhereInput, { nullable: true })
  @Type(() => MitsSlateCodilityWhereInput)
  where?: MitsSlateCodilityWhereInput;

  @ApiProperty({
    required: false,
    type: [MitsSlateCodilityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MitsSlateCodilityOrderByInput], { nullable: true })
  @Type(() => MitsSlateCodilityOrderByInput)
  orderBy?: Array<MitsSlateCodilityOrderByInput>;

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

export { MitsSlateCodilityFindManyArgs as MitsSlateCodilityFindManyArgs };
