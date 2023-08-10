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
import { MseLetterRecWhereInput } from "./MseLetterRecWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MseLetterRecOrderByInput } from "./MseLetterRecOrderByInput";

@ArgsType()
class MseLetterRecFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MseLetterRecWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MseLetterRecWhereInput, { nullable: true })
  @Type(() => MseLetterRecWhereInput)
  where?: MseLetterRecWhereInput;

  @ApiProperty({
    required: false,
    type: [MseLetterRecOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MseLetterRecOrderByInput], { nullable: true })
  @Type(() => MseLetterRecOrderByInput)
  orderBy?: Array<MseLetterRecOrderByInput>;

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

export { MseLetterRecFindManyArgs as MseLetterRecFindManyArgs };
