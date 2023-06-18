import * as React from 'react';
import {
    Spinner,
    SpinnerSize,
    createTheme,
    mergeStyles,
    IPartialTheme,
    ThemeProvider,
    SpinnerLabelPosition,
} from '@fluentui/react';

export interface ISpinnerProps {
    label?: string;
    spinnerSize: SpinnerSize;
    themeJSON?: string;
    ariaLabel?: string;
    labelPosition?: SpinnerLabelPosition;
    justify?: string;
    height: number;
    width: number;
    backgroundColor?: string;
    eosSpinnerWidth: number;
    eosSpinnerHeight: number;
    eosSpinnerWeight: number;
    eosSpinnerColor?: string;
}

export const CanvasSpinner = React.memo((props: ISpinnerProps) => {
    const { label, ariaLabel, spinnerSize, labelPosition, themeJSON, justify, height, backgroundColor } = props;
    const theme = React.useMemo(() => {
        try {
            return themeJSON ? createTheme(JSON.parse(themeJSON) as IPartialTheme) : undefined;
        } catch (ex) {
            /* istanbul ignore next */
            console.error('Cannot parse theme', ex);
        }
    }, [themeJSON]);

    function getSpinnerContainerStyle() {
        // Vertical center spinner
        return mergeStyles({
            height: height,
            display: 'flex',
            justifyContent: justify,
            backgroundColor: backgroundColor,
            width: props.width
        });
    }

    const spinnerStyles = {
        circle: {
            height: props.eosSpinnerHeight,
            width: props.eosSpinnerWidth,
            borderWidth: props.eosSpinnerWeight,
            borderColor: props.eosSpinnerColor,
        }
    }

    if (props.eosSpinnerWidth === 0 || props.eosSpinnerHeight === 0 || props.eosSpinnerWeight === 0) {
        return (
            <ThemeProvider theme={theme} className={getSpinnerContainerStyle()}>
                <Spinner aria-label={ariaLabel} label={label} size={spinnerSize} labelPosition={labelPosition} />
            </ThemeProvider>
        )
    }
    else {
        return (
            <ThemeProvider theme={theme} className={getSpinnerContainerStyle()}>
                <Spinner aria-label={ariaLabel} label={label} styles={spinnerStyles} labelPosition={labelPosition} />
            </ThemeProvider>
        )
    }
});
CanvasSpinner.displayName = 'CanvasSpinner';
