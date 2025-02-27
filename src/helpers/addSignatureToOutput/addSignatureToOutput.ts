/**
 * Replaces the end of the last row in the output with the given signature.
 *
 * @param output - An array of strings representing the rows of your ASCII animation.
 * @param name - The signature name to append (e.g. "Pollock").
 * @returns The modified output array.
 */
export function addSignatureToOutput(output: string[], name: string): string[] {
    if (output.length > 0) {
        let lastRow = output[output.length - 1];
        // If the last row is long enough, replace its final characters with the signature.
        if (lastRow.length >= name.length) {
            lastRow = lastRow.slice(0, lastRow.length - name.length) + name;
        } else {
            // Otherwise, just use the name.
            lastRow = name;
        }
        output[output.length - 1] = lastRow;
    }
    return output;
}
