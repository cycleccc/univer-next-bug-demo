'use client';

import {
    createUniver,
    defaultTheme,
    LocaleType,
    merge,
} from '@univerjs/presets';
import { UniverSheetsConditionalFormattingPreset } from '@univerjs/presets/preset-sheets-conditional-formatting';
import sheetsConditionalFormattingEnUS from '@univerjs/presets/preset-sheets-conditional-formatting/locales/en-US';
import { UniverSheetsCorePreset } from '@univerjs/presets/preset-sheets-core';
import sheetsCoreEnUS from '@univerjs/presets/preset-sheets-core/locales/en-US';
import { UniverSheetsDataValidationPreset } from '@univerjs/presets/preset-sheets-data-validation';
import sheetsDataValidationEnUS from '@univerjs/presets/preset-sheets-data-validation/locales/en-US';
import { UniverSheetsDrawingPreset } from '@univerjs/presets/preset-sheets-drawing';
import sheetsDrawingEnUS from '@univerjs/presets/preset-sheets-drawing/locales/en-US';
import { UniverSheetsFilterPreset } from '@univerjs/presets/preset-sheets-filter';
import sheetsFilterEnUS from '@univerjs/presets/preset-sheets-filter/locales/en-US';
import { UniverSheetsHyperLinkPreset } from '@univerjs/presets/preset-sheets-hyper-link';
import sheetsHyperLinkEnUS from '@univerjs/presets/preset-sheets-hyper-link/locales/en-US';
// import { WORKBOOK_DATA } from "./data";

// import "./style.css";
import '@univerjs/presets/lib/styles/preset-sheets-core.css';
import '@univerjs/presets/lib/styles/preset-sheets-conditional-formatting.css';
import '@univerjs/presets/lib/styles/preset-sheets-data-validation.css';
import '@univerjs/presets/lib/styles/preset-sheets-drawing.css';
import '@univerjs/presets/lib/styles/preset-sheets-filter.css';
import '@univerjs/presets/lib/styles/preset-sheets-hyper-link.css';

import { useEffect } from 'react';

export default function Sheet() {
    useEffect(() => {
        const { univerAPI } = createUniver({
            locale: LocaleType.EN_US,
            locales: {
                [LocaleType.EN_US]: merge(
                    {},
                    sheetsCoreEnUS,
                    sheetsConditionalFormattingEnUS,
                    sheetsDataValidationEnUS,
                    sheetsDrawingEnUS,
                    sheetsFilterEnUS,
                    sheetsHyperLinkEnUS,
                ),
            },
            theme: defaultTheme,
            presets: [
                UniverSheetsCorePreset(),
                UniverSheetsConditionalFormattingPreset(),
                UniverSheetsDataValidationPreset(),
                UniverSheetsDrawingPreset(),
                UniverSheetsFilterPreset(),
                UniverSheetsHyperLinkPreset(),
            ],
        });

        univerAPI.createWorkbook({ name: 'Test Sheet' });
    }, []);

    return <div id="app" />;
}
