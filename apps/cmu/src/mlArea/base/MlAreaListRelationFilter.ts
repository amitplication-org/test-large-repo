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
import { MlAreaWhereInput } from "./MlAreaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MlAreaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MlAreaWhereInput,
  })
  @ValidateNested()
  @Type(() => MlAreaWhereInput)
  @IsOptional()
  @Field(() => MlAreaWhereInput, {
    nullable: true,
  })
  every?: MlAreaWhereInput;

  @ApiProperty({
    required: false,
    type: () => MlAreaWhereInput,
  })
  @ValidateNested()
  @Type(() => MlAreaWhereInput)
  @IsOptional()
  @Field(() => MlAreaWhereInput, {
    nullable: true,
  })
  some?: MlAreaWhereInput;

  @ApiProperty({
    required: false,
    type: () => MlAreaWhereInput,
  })
  @ValidateNested()
  @Type(() => MlAreaWhereInput)
  @IsOptional()
  @Field(() => MlAreaWhereInput, {
    nullable: true,
  })
  none?: MlAreaWhereInput;
}
export { MlAreaListRelationFilter as MlAreaListRelationFilter };
