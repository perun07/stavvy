import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
// FYI started with https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/steppers/HorizontalNonLinearAlternativeLabelStepper.js

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));


export default function OrderTimeline(props) {
    const classes = useStyles();
    const steps = props.statuses;
    let initialActiveStep = props.statuses.indexOf(props.currentStatus);

    const [activeStep, setActiveStep] = React.useState(initialActiveStep);

    const [completed, setCompleted] = React.useState(
        () => {
            let initCompleted = {}
            // if the current status is the final status in the list of statuses, mark it as completed
            if (initialActiveStep === steps.length-1) {
                initialActiveStep++;
            }
            for (let i = 0; i < initialActiveStep; i++) {
                initCompleted = { ...initCompleted, [i]: true }
            }
            return initCompleted;
        }
    );

    const handleStep = step => () => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            {props.excludeStatus.includes(props.currentStatus) ? (
                <div>The order is currently in a {props.currentStatus} state.</div>
            ) :
                <div>
                    <Stepper nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepButton onClick={handleStep(index)} completed={completed[index]}>
                                    {label}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                </div>
            }
        </div>
    );
}