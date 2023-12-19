import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const AlertMessage = ({ message, error }) => {
    const [showAlert, setShowAlert] = useState(false);
    useEffect(() => {
        if (message) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    }, [message]);
    return (
        showAlert && (
            <Stack sx={{ width: '25%', position: 'fixed', top: '11%', right: '1%', zIndex: '9' }} spacing={2}>
                <Alert variant='filled' severity={error ? 'error' : 'success'}>{message}</Alert>
            </Stack>
        )
    )
}
