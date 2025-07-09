import { useEffect, useState } from 'react';

import { useDebounce } from 'hooks';

import { Clear, Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';

import { SearchWrapper } from './AutocompleteSearchbar.styles';
import { AutocompleteSearchbarProps } from './AutocompleteSearchbar.types';

/**
 * AutocompleteSearchbar component provides a search input with autocomplete functionality.
 * It uses a debounce hook to optimize the search results fetching.
 *
 * @template T - The type of the items in the list.
 * @param {AutocompleteSearchbarProps<T>} props - The props for the component.
 */
export const AutocompleteSearchbar = function <T>(
    props: AutocompleteSearchbarProps<T>,
) {
    const { list, filterFunction, getOptionLabel, handleSearch } = props;

    // State for storing the list of options to display in the dropdown
    const [optionList, setOptionList] = useState<T[]>([]);
    // State for storing the current input text
    const [inputText, setInputText] = useState<string>('');
    // State to control the open/close state of the dropdown
    const [open, setOpen] = useState<boolean>(false);
    // State to manage the loading state when fetching options
    const [loading, setLoading] = useState<boolean>(false);

    /**
     * Updates the search query and sets the loading state.
     *
     * @param {string} query - The search query text.
     */
    const updateSearch = (query: string) => {
        setLoading(true);
        setInputText(query);
    };

    /**
     * Filters the list based on the query and updates the options.
     *
     * @param {string} query - The search query text.
     */
    const getOptionData = (query: string) => {
        const filteredList = filterFunction(list, query);
        setOptionList(filteredList);
        setLoading(false);
    };

    // Debounced version of the getOptionData function
    const betterGetOptionData = useDebounce(getOptionData);

    // Effect to handle the clearing of options and closing of the dropdown when input is cleared
    useEffect(() => {
        if (inputText?.trim().length <= 0) {
            if (optionList.length > 0) {
                setOptionList([]);
            }
            if (open) {
                setOpen(false);
            }
        }
    }, [inputText, optionList, open]);

    return (
        <SearchWrapper
            id="autocomplete-search-bar"
            options={optionList}
            getOptionLabel={getOptionLabel}
            noOptionsText={
                inputText ? `No result found for "${inputText.trim()}"` : ''
            }
            open={open && Boolean(inputText.trim())}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            loading={loading}
            inputMode="search"
            autoComplete
            includeInputInList
            filterOptions={(x) => x}
            forcePopupIcon={false}
            clearIcon={inputText ? <Clear fontSize="small"></Clear> : <></>}
            disablePortal
            onInputChange={(_, newValue) => {
                updateSearch(newValue);
                betterGetOptionData(newValue.trim());
            }}
            onChange={(_, option, reason) => {
                if (reason === 'selectOption') {
                    handleSearch(option);
                }
            }}
            title="Search Product"
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Search"
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                            endAdornment: <>{params.InputProps.endAdornment}</>,
                        },
                    }}
                    fullWidth
                />
            )}
        />
    );
};
