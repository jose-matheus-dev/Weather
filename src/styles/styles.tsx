/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols

import styled, { createGlobalStyle, css } from 'styled-components';

export const ResetStyle = createGlobalStyle`
/***
    The new CSS reset - version 1.11.2 (last updated 15.11.2023)
    GitHub page: https://github.com/elad2412/the-new-css-reset
***/

/*
    Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
    - The "html" element is excluded, otherwise a bug in Chrome breaks the CSS hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36)
 */
*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
}

/* Preferred box-sizing value */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Fix mobile Safari increase font-size on landscape mode */
html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
}

/* Reapply the pointer cursor for anchor tags */
a, button {
    cursor: revert;
}

/* Remove list styles (bullets/numbers) */
ol, ul, menu, summary {
    list-style: none;
}

/* For images to not be able to exceed their container */
img {
    max-inline-size: 100%;
    max-block-size: 100%;
}

/* removes spacing between cells in tables */
table {
    border-collapse: collapse;
}

/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
input, textarea {
    -webkit-user-select: auto;
}

/* revert the 'white-space' property for textarea elements on Safari */
textarea {
    white-space: revert;
}

/* minimum style to allow to style meter element */
meter {
    -webkit-appearance: revert;
    appearance: revert;
}

/* preformatted text - use only for this feature */
:where(pre) {
    all: revert;
    box-sizing: border-box;
}

/* reset default text opacity of input placeholder */
::placeholder {
    color: unset;
}

/* fix the feature of 'hidden' attribute.
   display:revert; revert to element instead of attribute */
:where([hidden]) {
    display: none;
}

/* revert for bug in Chromium browsers
   - fix for the content editable attribute will work properly.
   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
:where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
}

/* apply back the draggable feature - exist only in Chromium and Safari */
:where([draggable="true"]) {
    -webkit-user-drag: element;
}

/* Revert Modal native behavior */
:where(dialog:modal) {
    all: revert;
    box-sizing: border-box;
}

/* Remove details summary webkit styles */
::-webkit-details-marker {
    display: none;
}
`;

export const GlobalStyle = createGlobalStyle`

  body {
    min-height: 100svh;
    min-height: 100dvh;
    background-color: #e1e1e1;
  }
  h1, h2, h4, p, label {
    color: ${({ theme }) => (theme.isDarkMode ? '#ececec !important' : 'inherit')};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Montserrat', sans-serif; */
    font-family: 'Poppins', sans-serif;
    transition: background-color 0.5s ease;
  }

  input, button {
    outline: none;
    border: none;
    background-color: inherit;
  }
  img {
    object-fit: cover;
    
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input.attrs(({ type }) => ({ required: type !== 'submit' }))`
  padding: 15px;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  border: 1px solid #dedede;
  &::placeholder {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const TextArea = styled.textarea`
  padding: 15px;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  border: 1px solid #dedede;
  height: 80px;
  background-color: inherit;
  resize: none;
`;

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
`;
