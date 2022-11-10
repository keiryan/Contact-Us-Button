import { Container } from "./styles.button";

function Button(props) {
  return <Container>{props.text || 'Contact Us'}</Container>;
}

export default Button;
