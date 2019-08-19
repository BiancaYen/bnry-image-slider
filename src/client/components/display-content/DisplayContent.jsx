// Display Content

import PropTypes from 'prop-types';

// Types
import { ElseType } from '../else/Else';

// Default Props
const defaultProps = {
    isDisplayed: false
};

// Prop Types
const propTypes = {
    children: PropTypes.node.isRequired,
    isDisplayed: PropTypes.bool
};

const DisplayContent = ({ isDisplayed, children }) => {
    if (isDisplayed) {
        return children.length ? children.filter(child => child.type.componentType !== ElseType) : children;
    }
    return children.length ? children.filter(child => child.type.componentType === ElseType) : null;
};

DisplayContent.defaultProps = defaultProps;
DisplayContent.propTypes = propTypes;

export default DisplayContent;
