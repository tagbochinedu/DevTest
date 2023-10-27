
interface Props {
  styling?: string;
  text: string;
}

const H1 = ({ styling, text }: Props) => {
  return (
    <h1
      className={`font-open text-lg md:text-xl lg:text-2xl font-semibold text-center ${styling}`}
    >
      {text}
    </h1>
  );
};

export default H1;
