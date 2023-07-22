export default function ToggleText({ showText }) {
  return <>{showText && <p data-testid="show-text">Some text!</p>}</>;
}
