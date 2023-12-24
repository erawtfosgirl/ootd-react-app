import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    marginBottom: '10px',
    // '&:not(:last-child)': {
    //     borderBottom: 0,
    // },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .02)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
export const Faq = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <section className='faq-section'>
            <div className="container">
                <h1 className="text-center">How can we help you ?</h1>
                <div>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>WHERE CAN I RECEIVE MY ORDER?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You can receive it at a private address (home, work or a drop
                                point), but never a post office box or at a OOTD store of your choice.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography>WHAT IS THE PROCESS FOR HOME DELIVERY?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                If you have chosen home delivery, we will send you a confirmation
                                e-mail when your order is going to leave the warehouse, another
                                e-mail with a tracking number and a link to the courier's website,
                                and finally the courier will contact you via SMS or e-mail to notify
                                you when your order will be delivered.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>HOW LONG DO I HAVE TO MAKE RETURNS?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The deadline for all returns is 30 calendar days from the date you
                                receive the Shipping Confirmation.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                            <Typography>CAN I CANCEL MY ORDER?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes. You can cancel your order from the orders placed section of
                                your account.Yes. You can cancel your order from the orders placed
                                section of your account. If you placed the order as a Guest, you can
                                cancel the order form the confirmation email.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
