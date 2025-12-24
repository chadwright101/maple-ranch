import classNames from "classnames";
import ReviewSlider from "./review-slider";

interface Props {
  cssClasses?: string;
  data: { name: string; review: string }[];
}

const ReviewsComponent = ({ cssClasses, data }: Props) => {
  return (
    <section className={classNames("desktop:pt-15", cssClasses)}>
      <h2 className="font-rye text-[32px] tablet:text-[40px]">Reviews</h2>
      <ReviewSlider data={data} />
    </section>
  );
};

export default ReviewsComponent;
