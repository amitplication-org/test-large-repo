/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { registerEnumType } from "@nestjs/graphql";

export enum EnumMhciPrereqsStatusReviewerStatus {
  NotSubmitted = "Not_Submitted",
  Submitted = "Submitted",
  InProgress = "In_progress",
  ApprovedPlan = "Approved_plan",
  FulfilledUndergraduateDegree = "Fulfilled__undergraduate_degree",
  Fulfilled_6 = "Fulfilled_6",
}

registerEnumType(EnumMhciPrereqsStatusReviewerStatus, {
  name: "EnumMhciPrereqsStatusReviewerStatus",
});
