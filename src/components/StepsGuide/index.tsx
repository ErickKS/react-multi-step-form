import { Link } from 'react-router-dom';  

import * as Sty from './styles';

interface StepsGuideProps {
  title: string,
  number: number,
  path: string,
  active: boolean
}

export function StepsGuide({title, number, path, active}: StepsGuideProps) {
  return (
    <Sty.Container>
      <Link to={path}>
        <Sty.NumberBox active={active}>
          {number}
        </Sty.NumberBox>
        <p>{title}</p>
      </Link>
    </Sty.Container>
  )
}