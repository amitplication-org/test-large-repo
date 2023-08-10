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
import { SlateMaterialWhereUniqueInput } from "./SlateMaterialWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteSlateMaterialArgs {
  @ApiProperty({
    required: true,
    type: () => SlateMaterialWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SlateMaterialWhereUniqueInput)
  @Field(() => SlateMaterialWhereUniqueInput, { nullable: false })
  where!: SlateMaterialWhereUniqueInput;
}

export { DeleteSlateMaterialArgs as DeleteSlateMaterialArgs };
