import * as Sty from "./styles";

interface SelectOptionsProps {
  title: string;
  svg: string;
  selected: boolean;
  onClick: () => void;
}

export function SelectOptions({
  title,
  svg,
  selected,
  onClick,
}: SelectOptionsProps) {
  return (
    <Sty.Container selected={selected} onClick={onClick}>
      <Sty.Svg>
        <img src={svg} alt="illustrative svg" />
      </Sty.Svg>
      <div translate="no">{title}</div>
    </Sty.Container>
  );
}
