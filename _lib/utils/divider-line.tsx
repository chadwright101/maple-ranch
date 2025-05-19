import classNames from "classnames";

interface DividerLineProps {
  containerClasses?: string;
  lineClasses?: string;
}

const DividerLine = ({ containerClasses, lineClasses }: DividerLineProps) => {
  return (
    <div className={classNames("my-15", containerClasses)}>
      <hr className={classNames("text-blue/25", lineClasses)} />
    </div>
  );
};

export default DividerLine;
