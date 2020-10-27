export interface ILayoutProps {
  title?: string;
  des?: string;
  kw?: string;
  window?: () => Window;
  children?: React.ReactElement | Array<React.ReactElement>;
}
