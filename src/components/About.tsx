import styles from "../styles";

export const About = () => {
  return (
    <section id="about">
      <h4
        className={`${styles.heading2} font-poppins font-semibold xs:text-[40px] text-[30px] text-center text-gradient pb-4`}
      >
        About
      </h4>
      <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[35px] leading-[21px] text-dark-dimWhite ml-1 sm:pb-20 pb-10 text-center">
        
         <br className="block" />
         Hello, I'm Aatesh, a software developer at Barclays since August 2022, with a 
         Bachelor's degree in Computer Science from MNIT Jaipur, achieving a CGPA of 7.5.
          Proficient in web technologies, I'm eager to delve into new tech realms.
           Regularly tackling problems, my LeetCode rating stands at 1800+, showcasing a penchant for consistency.
            While strength lies in maintaining consistency, I acknowledge 
         occasional underestimation of my potential. Committed to continuous growth,
          I seek to enrich my portfolio with diverse experiences and achievements.
        <br className="block" />
        <br className="block" />
        <br className="block" />
        Passionate cricketer with a record of tournament victories, securing two Man
         of the Tournament titles at GRT Tournament Barclays. Enjoys immersing in the 
        cinematic world and indulging in strategic chess matches. Recognized for active
         listening skills, particularly drawn to engaging discussions.
        <br className="block" /> 
      </p>
    </section>
  );
};
