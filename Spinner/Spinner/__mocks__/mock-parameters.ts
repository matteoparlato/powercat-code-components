/* istanbul ignore file */

import { IInputs } from '../generated/ManifestTypes';
import { MockEnumProperty, MockStringProperty, MockWholeNumberProperty } from './mock-context';

export function getMockParameters(): IInputs {
    return {
        Theme: new MockStringProperty(),
        AccessibilityLabel: new MockStringProperty(),
        Label: new MockStringProperty(),
        SpinnerSize: new MockEnumProperty(),
        LabelPosition: new MockEnumProperty(),
        SpinnerAlignment: new MockEnumProperty(),
        BackgroundColor: new MockStringProperty(),
        eosSpinnerWidth: new MockWholeNumberProperty(),
        eosSpinnerHeight: new MockWholeNumberProperty(),
        eosSpinnerWeight: new MockWholeNumberProperty()
    };
}
