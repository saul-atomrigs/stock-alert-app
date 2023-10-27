import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /** COLORS SET */
    --scale-color-gray-00: #f7fafc;
    --scale-color-gray-100: #edf2f7;
    --scale-color-gray-200: #e2e8f0;
    --scale-color-gray-300: #cbd5e0;
    --scale-color-gray-400: #a0aec0;
    --scale-color-gray-500: #718096;
    --scale-color-gray-600: #4a5568;
    --scale-color-gray-700: #2d3748;
    --scale-color-gray-800: #1a202c;
    --scale-color-gray-900: #171923;

    --scale-color-blue-00: #ebf8ff;
    --scale-color-blue-100: #bee3f8;
    --scale-color-blue-200: #90cdf4;
    --scale-color-blue-300: #63b3ed;
    --scale-color-blue-400: #4299e1;
    --scale-color-blue-500: #3182ce;
    --scale-color-blue-600: #2b6cb0;
    --scale-color-blue-700: #2c5282;
    --scale-color-blue-800: #2a4365;
    --scale-color-blue-900: #1a365d;
    --scale-color-blue-950: #0f172a;

    --scale-color-green-00: #f0fff4;
    --scale-color-green-100: #dcffe4;
    --scale-color-green-200: #bef264;
    --scale-color-green-300: #86efac;
    --scale-color-green-400: #4ade80;
    --scale-color-green-500: #22c55e;
    --scale-color-green-600: #16a34a;
    --scale-color-green-700: #15803d;
    --scale-color-green-800: #166534;
    --scale-color-green-900: #14532d;

    --scale-color-red-00: #fff5f5;
    --scale-color-red-100: #fed7d7;
    --scale-color-red-200: #feb2b2;
    --scale-color-red-300: #fc8181;
    --scale-color-red-400: #f56565;
    --scale-color-red-500: #e53e3e;
    --scale-color-red-600: #c53030;
    --scale-color-red-700: #9b2c2c;
    --scale-color-red-800: #822727;
    --scale-color-red-900: #63171b;

    --scale-color-yellow-00: #fffbeb;
    --scale-color-yellow-100: #fef3c7;
    --scale-color-yellow-200: #fde68a;
    --scale-color-yellow-300: #fcd34d;
    --scale-color-yellow-400: #fbbf24;
    --scale-color-yellow-500: #f59e0b;
    --scale-color-yellow-600: #d97706;
    --scale-color-yellow-700: #b45309;
    --scale-color-yellow-800: #92400e;
    --scale-color-yellow-900: #78350f;

    /** FONTS */
    --scale-dimension-font-size-10: 10px;
    --scale-dimension-font-size-14: 14px;
    --scale-dimension-font-size-16: 16px;
    --scale-dimension-font-size-20: 20px;
    --scale-dimension-font-size-24: 24px;

    /** LETTER SPACING */
    --scale-letter-spacing-none: 0;
    --scale-letter-spacing-narrow-200: -0.02em;
    --scale-letter-spacing-narrow-300: -0.01em;
    --scale-letter-spacing-narrow-400: -0.005em;

    /** TYPOGRAPHY */
    --scale-typography-h1: 48px;
    --scale-typography-h2: 40px;
    --scale-typography-h3: 32px;
    --scale-typography-h4: 24px;
  }
`;

export const gray00 = 'var(--scale-color-gray-00)';
export const gray50 = 'var(--scale-color-gray-50)';
export const gray100 = 'var(--scale-color-gray-100)';
export const gray200 = 'var(--scale-color-gray-200)';
export const gray300 = 'var(--scale-color-gray-300)';
export const gray400 = 'var(--scale-color-gray-400)';
export const gray500 = 'var(--scale-color-gray-500)';
export const gray600 = 'var(--scale-color-gray-600)';
export const gray700 = 'var(--scale-color-gray-700)';
export const gray800 = 'var(--scale-color-gray-800)';
export const gray900 = 'var(--scale-color-gray-900)';
export const blue50 = 'var(--scale-color-blue-50)';
export const blue100 = 'var(--scale-color-blue-100)';
export const blue200 = 'var(--scale-color-blue-200)';
export const blue300 = 'var(--scale-color-blue-300)';
export const blue400 = 'var(--scale-color-blue-400)';
export const blue500 = 'var(--scale-color-blue-500)';
export const blue600 = 'var(--scale-color-blue-600)';
export const blue700 = 'var(--scale-color-blue-700)';
export const blue800 = 'var(--scale-color-blue-800)';
export const blue900 = 'var(--scale-color-blue-900)';
export const red50 = 'var(--scale-color-red-50)';
export const red100 = 'var(--scale-color-red-100)';
export const red200 = 'var(--scale-color-red-200)';
export const red300 = 'var(--scale-color-red-300)';
export const red400 = 'var(--scale-color-red-400)';
export const red500 = 'var(--scale-color-red-500)';
export const red600 = 'var(--scale-color-red-600)';
export const red700 = 'var(--scale-color-red-700)';
export const red800 = 'var(--scale-color-red-800)';
export const red900 = 'var(--scale-color-red-900)';
export const green50 = 'var(--scale-color-green-50)';
export const green100 = 'var(--scale-color-green-100)';
export const green200 = 'var(--scale-color-green-200)';
export const green300 = 'var(--scale-color-green-300)';
export const green400 = 'var(--scale-color-green-400)';
export const green500 = 'var(--scale-color-green-500)';
export const green600 = 'var(--scale-color-green-600)';
export const green700 = 'var(--scale-color-green-700)';
export const green800 = 'var(--scale-color-green-800)';
export const green900 = 'var(--scale-color-green-900)';
export const yellow50 = 'var(--scale-color-yellow-50)';
export const yellow100 = 'var(--scale-color-yellow-100)';
export const yellow200 = 'var(--scale-color-yellow-200)';
export const yellow300 = 'var(--scale-color-yellow-300)';
export const yellow400 = 'var(--scale-color-yellow-400)';
export const yellow500 = 'var(--scale-color-yellow-500)';
export const yellow600 = 'var(--scale-color-yellow-600)';
export const yellow700 = 'var(--scale-color-yellow-700)';
export const yellow800 = 'var(--scale-color-yellow-800)';
export const yellow900 = 'var(--scale-color-yellow-900)';

/** FONTS SIZES */
export const fontSize10 = 'var(--scale-dimension-font-size-10)';
export const fontSize14 = 'var(--scale-dimension-font-size-14)';
export const fontSize16 = 'var(--scale-dimension-font-size-16)';
export const fontSize20 = 'var(--scale-dimension-font-size-20)';
export const fontSize24 = 'var(--scale-dimension-font-size-24)';

/** LETTER SPACING */
export const none = 'var(--scale-letter-spacing-none)';
export const narrow200 = 'var(--scale-letter-spacing-narrow-200)';
export const narrow300 = 'var(--scale-letter-spacing-narrow-300)';
export const narrow400 = 'var(--scale-letter-spacing-narrow-400)';

/** TYPOGRAPHY */
export const h1 = 'semantic-typography-h1';
export const h2 = 'semantic-typography-h2';
export const h3 = 'semantic-typography-h3';
export const h4 = 'semantic-typography-h4';

export const title1Bold = 'semantic-typography-title1-bold';
export const title1Regular = 'semantic-typography-title1-regular';

export const title2Bold = 'semantic-typography-title2-bold';
export const title2Regular = 'semantic-typography-title2-regular';

export const title3Bold = 'semantic-typography-title3-bold';
export const title3Regular = 'semantic-typography-title3-regular';

export const subtitle1Bold = 'semantic-typography-subtitle1-bold';
export const subtitle1Regular = 'semantic-typography-subtitle1-regular';

export const subtitle2Bold = 'semantic-typography-subtitle2-bold';
export const subtitle2Regular = 'semantic-typography-subtitle2-regular';

export const bodyL1Bold = 'semantic-typography-body-l1-bold';
export const bodyL1Regular = 'semantic-typography-body-l1-regular';

export const bodyL2Bold = 'semantic-typography-body-l2-bold';
export const bodyL2Regular = 'semantic-typography-body-l2-regular';

export const bodyM1Bold = 'semantic-typography-body-m1-bold';
export const bodyM1Regular = 'semantic-typography-body-m1-regular';

export const bodyM2Bold = 'semantic-typography-body-m2-bold';
export const bodyM2Regular = 'semantic-typography-body-m2-regular';

export const caption1Bold = 'semantic-typography-caption1-bold';
export const caption1Regular = 'semantic-typography-caption1-regular';

export const caption2Bold = 'semantic-typography-caption2-bold';
export const caption2Regular = 'semantic-typography-caption2-regular';

export const label1Bold = 'semantic-typography-label1-bold';
export const label1Regular = 'semantic-typography-label1-regular';

export const label2Bold = 'semantic-typography-label2-bold';
export const label2Regular = 'semantic-typography-label2-regular';

export const label3Bold = 'semantic-typography-label3-bold';
export const label3Regular = 'semantic-typography-label3-regular';

export const label4Bold = 'semantic-typography-label4-bold';
export const label4Regular = 'semantic-typography-label4-regular';

export const label5Bold = 'semantic-typography-label5-bold';
export const label5Regular = 'semantic-typography-label5-regular';

export const label6Bold = 'semantic-typography-label6-bold';
export const label6Regular = 'semantic-typography-label6-regular';
