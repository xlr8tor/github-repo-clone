import styled from "styled-components";

const Pill = ({ content, secondary }) => {
  return <Wrapper secondary={secondary || false}>{content}</Wrapper>;
};

export default Pill;

const Wrapper = styled.span`
  display: inline-block;
  color: ${(props) =>
    props.secondary ? "hsl(212deg 10% 38%)" : "hsl(213deg 13% 16%)"};
  background-color: ${(props) =>
    props.secondary ? "transparent" : "hsl(210deg 13% 72% / 20%)"};
  padding: 0 0.438rem;
  border: ${(props) =>
    props.secondary
      ? "1px solid hsl(210deg 18% 84%)"
      : "1px solid transparent"};
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: var(--font-medium);
  white-space: nowrap;
  margin-left: var(--mb-0-5);
  margin-bottom: var(--mb-0-25);
  vertical-align: middle;
  &.header__pill {
    color: inherit;
  }
`;
