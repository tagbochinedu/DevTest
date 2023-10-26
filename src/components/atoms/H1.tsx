
interface Props {
  styling?: string;
  text: string;
}

const H1 = ({ styling, text }: Props) => {
  return <h1 className={`font-open text-3xl font-semibold ${styling}`}>{text}</h1>;
};

export default H1;
