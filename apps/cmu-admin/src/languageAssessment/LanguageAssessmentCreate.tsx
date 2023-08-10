import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const LanguageAssessmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Competency Evidence" source="competencyEvidence" />
        <TextInput label="Language" source="language" />
        <NumberInput step={1} label="Listening" source="listening" />
        <NumberInput step={1} label="Native Speaker" source="nativeSpeaker" />
        <NumberInput step={1} label="Reading" source="reading" />
        <NumberInput step={1} label="Speaking" source="speaking" />
        <NumberInput step={1} label="Study Level" source="studyLevel" />
        <NumberInput step={1} label="Writing" source="writing" />
        <NumberInput step={1} label="Years Study" source="yearsStudy" />
      </SimpleForm>
    </Create>
  );
};
