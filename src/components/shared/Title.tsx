type Heading = 'h1' | 'h2' | 'h3' | 'h4';

interface TitleProps {
  is: Heading;
  i18key: string;
  className: string;
}

export const Title = ({
  is: Element = 'h2',
  i18key,
  className,
}: TitleProps) => <Element className={className}>{i18key}</Element>;
