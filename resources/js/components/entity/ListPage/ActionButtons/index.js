import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const ActionButtons = ({ id, onRemove, remove, edit }) => {
    const location = useLocation();

    return (
        <>
            {edit && (
                <IconButton
                    color="primary"
                    component={Link}
                    to={`${location.pathname}/${id}`}
                >
                    <EditIcon color="primary" />
                </IconButton>
            )}

            {remove && (
                <IconButton
                    aria-label="edit"
                    onClick={() => onRemove([id])}
                >
                    <DeleteIcon color="secondary" />
                </IconButton>
            )}
        </>
    );
};

export default ActionButtons;
