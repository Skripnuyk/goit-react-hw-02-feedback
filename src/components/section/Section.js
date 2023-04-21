import PropTypes from 'prop-types';
import { Wrap, TitleMessage } from './Section.styled';

function Section({ title, children }) {
return (
  <Wrap>
    {{ title } && <TitleMessage>{title}</TitleMessage>}
    {children}
  </Wrap>
);
} 

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section