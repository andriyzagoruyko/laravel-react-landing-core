import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

export default LinkRouter;