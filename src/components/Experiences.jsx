import { Timeline } from "../subComponents/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;