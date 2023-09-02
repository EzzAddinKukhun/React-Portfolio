import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));



export default function CustomizedDialogs({ open, closeDialog, projectInformation }) {

    return (
        <div>
            <BootstrapDialog
                onClose={closeDialog}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {projectInformation.projectName}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={closeDialog}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <h5><b>Project Description</b></h5>
                        <p style={{ textAlign: 'justify' }}>
                            {projectInformation.description}
                        </p>
                    </Typography>
                    <Typography gutterBottom>
                        <h5><b>Frontend Technologies</b></h5>
                        <p style={{ textAlign: 'justify' }}>
                            {projectInformation.frontendTech?.map((tech) => {
                                return tech + " ,"
                            })}
                        </p>
                    </Typography>
                    <Typography gutterBottom>
                        {
                            projectInformation.backendTech?.length > 0 ?
                                <div>
                                    <h5><b>Backend Technologies</b></h5>
                                    <p style={{ textAlign: 'justify' }}>
                                        {projectInformation.backendTech?.map((tech) => {
                                            return tech + ","
                                        })}
                                    </p>
                                </div>
                                : ""
                        }

                    </Typography>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}
