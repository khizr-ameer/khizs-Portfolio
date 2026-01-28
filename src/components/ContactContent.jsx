import { contactDescription } from "../consts";
import IntersectionAnim from "./IntersectionAnim";
import NumHeading from "./NumHeading";
import OutlinedButton from "./OutlinedButton";

const ContactContent = () => {
  return (
    <div
      id="contact"
      className="min-h-[85vh] flex flex-col justify-center pt-4 pb-12 md:py-4"
    >
      <IntersectionAnim index={0} delay={0.2} type={"transLeft"}>
        <NumHeading number={4} content={"Contact Me"} />
      </IntersectionAnim>
      <div className="max-w-[700px] mx-auto">
        <IntersectionAnim index={1} delay={0.2} type={"transUp"}>
          <h3 className="text-xl font-medium text-center primary-color tracking-wide mb-2">
            Get in touch
          </h3>
        </IntersectionAnim>
        <IntersectionAnim index={2} delay={0.1} type={"transUp"}>
          <p className="text-center greyish-color tracking-wide mb-8">
            {contactDescription}
          </p>
        </IntersectionAnim>
        <IntersectionAnim index={3} delay={0.1} type={"transUp"}>
          <a href={`mailto:khizrr.ameer@gmail.com`} target="_blank">
            <div className="flex justify-center mb-8">
              <OutlinedButton text={"Say Hello!"} />
            </div>
          </a>
        </IntersectionAnim>
      </div>
    </div>
  );
};

export default ContactContent;
