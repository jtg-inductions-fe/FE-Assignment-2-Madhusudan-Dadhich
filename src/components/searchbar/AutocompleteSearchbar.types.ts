/**
 * Interface for the AutocompleteSearchbar component props.
 *
 * @template T - The type of the items in the list.
 */
export interface AutocompleteSearchbarProps<T> {
    /**
     * The list of items to display in the dropdown.
     */
    list: T[];

    /**
     * A function to filter the list of items based on the query.
     *
     * @param {T[]} data - The list of items.
     * @param {string} query - The query to filter by.
     * @returns {T[]} The filtered list of items.
     */
    filterFunction: (data: T[], query: string) => T[];

    /**
     * A function to get the label for each item in the list.
     *
     * @param {unknown} option - The item to get the label for.
     * @returns {string} The label for the item.
     */
    getOptionLabel: (option: unknown) => string;

    /**
     * A function to execute when an item is selected.
     *
     * @param {unknown} option - The selected item.
     */
    handleSearch: (option: unknown) => void;
}
