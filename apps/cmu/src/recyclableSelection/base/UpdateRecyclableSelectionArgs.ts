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
import { RecyclableSelectionWhereUniqueInput } from "./RecyclableSelectionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RecyclableSelectionUpdateInput } from "./RecyclableSelectionUpdateInput";

@ArgsType()
class UpdateRecyclableSelectionArgs {
  @ApiProperty({
    required: true,
    type: () => RecyclableSelectionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RecyclableSelectionWhereUniqueInput)
  @Field(() => RecyclableSelectionWhereUniqueInput, { nullable: false })
  where!: RecyclableSelectionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RecyclableSelectionUpdateInput,
  })
  @ValidateNested()
  @Type(() => RecyclableSelectionUpdateInput)
  @Field(() => RecyclableSelectionUpdateInput, { nullable: false })
  data!: RecyclableSelectionUpdateInput;
}

export { UpdateRecyclableSelectionArgs as UpdateRecyclableSelectionArgs };
