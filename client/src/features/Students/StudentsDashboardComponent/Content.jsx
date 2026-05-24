import ContactAdmin from "../../../components/ContactAdmin";
import Classes from "./Classes";
import Grades from "./Grades";
import NOtifications from "./Notifications";

export default function Content() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5">
      {/* Left Section */}
      <div className="xl:col-span-2 space-y-5">
        <Classes />
        <Grades />
      </div>

      {/* Right Section */}
      <div className="space-y-5">
        <NOtifications />
        <ContactAdmin />
      </div>
    </div>
  );
}
