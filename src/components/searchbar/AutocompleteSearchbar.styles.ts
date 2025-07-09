import {
    Autocomplete,
    autocompleteClasses,
    outlinedInputClasses,
    paperClasses,
    styled,
} from '@mui/material';
import popperClasses from '@mui/material/Popper/popperClasses';

export const SearchWrapper = styled(Autocomplete)(
    ({ theme: { shadows, spacing } }) => ({
        minWidth: spacing(100),

        [`& .${outlinedInputClasses.notchedOutline}`]: {
            border: 'none',
            borderRadius: spacing(4),
            boxShadow: shadows[4],
        },

        [`& .${autocompleteClasses.inputRoot}`]: {
            paddingLeft: spacing(3),
        },

        [`& .${autocompleteClasses.input}`]: {
            maxHeight: spacing(3.5),
            fontSize: spacing(4),
        },

        [`+ .${popperClasses.root}`]: {
            paddingTop: spacing(1),

            [`& .${paperClasses.root}`]: {
                borderRadius: spacing(4),
            },
        },
    }),
);
