import FormStructures from "../../../client/src/components/FormsStructures";
import Actions from "../features/Admin/TeacherProfileComponent/Actions";
import Avatar from "../features/Admin/TeacherProfileComponent/Avatar";
import Information from "../features/Admin/TeacherProfileComponent/Information";

export default function TeacherProfile() {
  return (
    <FormStructures>
      <Avatar />
      <Information />
      <Actions />
    </FormStructures>
  );
}
