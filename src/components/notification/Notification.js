import PropTypes from 'prop-types';
import { NotificationWrap } from './Notification.styled';

function Notification({ message, children }) {
    return (
        <NotificationWrap>
            {{ message } && <h3>{message}</h3>}
            {children}
        </NotificationWrap>
    );
}

Notification.propTypes = {
    message: PropTypes.string,
    children: PropTypes.node,
};

export default Notification