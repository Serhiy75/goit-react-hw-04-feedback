import { Notify } from "./NotificationMessage.styled"
import PropTypes from 'prop-types';

export const NotificationMessage = ({ message }) => {
    return (<Notify>
        &#127773; {message}
    </Notify>)
}

NotificationMessage.propTypes = {
    message: PropTypes.string.isRequired
}