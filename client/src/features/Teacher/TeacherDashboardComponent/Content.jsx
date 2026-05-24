import ContactAdmin from "../../../components/ContactAdmin";
import Classes from "./Classes";
import Curriculum from "./Curriculum";
import Notifications from "./Notifications";
import Students from "./Students";

export default function Content() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 mt-5">
      {/* Left */}
      <div className="xl:col-span-8 space-y-5">
        <Classes />
        <Students />
        <ContactAdmin />
      </div>

      {/* Right */}
      <div className="xl:col-span-4 space-y-5">
        <Notifications />
        <Curriculum />
      </div>
    </div>
  );
}
