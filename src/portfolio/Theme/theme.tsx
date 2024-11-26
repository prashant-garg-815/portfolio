import { createTheme as muiCreateTheme, Theme } from "@mui/material";
import {light} from "./lightTheme";
import {dark} from "./darkTheme";

export enum PaletteModes {
  light = 'light',
  dark = 'dark',
}

const PALETTES = {
  [PaletteModes.dark]: dark,
  [PaletteModes.light]: light
}

const createTheme = (mode: PaletteModes): Theme => muiCreateTheme({
  palette: {
    ...PALETTES['dark']
  }
})

export const lightTheme = createTheme(PaletteModes.light);
export const darkTheme = createTheme(PaletteModes.dark);
