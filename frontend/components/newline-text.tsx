interface NewlineTextProps {
  text: string;
}

export default function NewlineText(props: NewlineTextProps) {
  const text = props.text;
  const newText = text
    .split("\n")
    .map((str, idx) => <p key={idx}>{str === "" ? <br /> : str}</p>);
  return <>{newText}</>;
}
