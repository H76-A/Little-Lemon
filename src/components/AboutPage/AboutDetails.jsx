import { rowsData } from '../../data/aboutPage';
import Row from './Row';

const AboutDetails = () => {
  return (
    <section className="bg-[#F2EFF0] pt-20 pb-20 md:pb-40 space-y-6">
      {rowsData.map((row, index) => {
        const { title, description, imageSrc, imageAlt } = row;
        const isLTR = index % 2 === 0;

        return (
          <Row
            key={title}
            title={title}
            description={description}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            isLTR={isLTR}
          />
        );
      })}
    </section>
  );
};

export default AboutDetails;
