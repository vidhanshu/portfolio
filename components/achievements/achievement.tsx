import { ACHIEVEMENTS } from "@/lib/constants";
import AnimatedAccordion from "../common/animated-accordion";
import Section from "../section";

const Achievements = () => {
  return (
    <Section sectionTitle="Achievements">
      <div className="max-w-6xl mx-auto space-y-8">
        <AnimatedAccordion shootingStar achievements={ACHIEVEMENTS} />
      </div>
    </Section>
  );
};

export default Achievements;
