import Teacher from "./Teacher";
import Classes from "./Classes";
import Notifications from "./Notifications";
import Finance from "./Finance";
export default function Content() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5">
      {/* Left */}
      <div className="xl:col-span-2 space-y-5">
        <Teacher />
        <Classes />
      </div>

      {/* Right */}
      <div className="space-y-5">
        <Notifications />
        <Finance />
      </div>
    </div>
  );
}
