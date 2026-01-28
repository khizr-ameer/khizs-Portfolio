import IntersectionAnim from "./IntersectionAnim";
import NumHeading from "./NumHeading";
import { skillsDescription, skills } from "../consts";

const SkillsContent = () => {
  return (
    <div id="skills" className="min-h-screen flex flex-col justify-center py-4">
      <IntersectionAnim index={0} delay={0.2} type={"transLeft"}>
        <NumHeading number={2} content={"My Skills"} />
      </IntersectionAnim>
      <IntersectionAnim index={1} delay={0.2} type={"transRight"}>
        <p>
          {skillsDescription}
        </p>
      </IntersectionAnim>
      <ul className="mt-8 md:mx-auto flex flex-col ">
        {skills.map((skill, index) => (
          <li key={index} className="py-1">
            <IntersectionAnim index={2} delay={0.05 * (index + 1)} type="transUp">
              <span dangerouslySetInnerHTML={{ __html: skill }} />
            </IntersectionAnim>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsContent;
